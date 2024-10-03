import { useEffect, useState } from 'react';
import { Page, Text, View, Image, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { FeeList, OrderPaymentValuesTypes } from '../../types/assessment';
import { useQuery } from '@tanstack/react-query';
import { FetchLoginAccount } from '../../http/get/auth';
import { FetchAssessments } from '../../http/get/assesments';
import { getCurrentFormattedDate } from '../../helpers/currentDate';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    height: '100%',
    gap: 20,
    paddingTop: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header_text_logo_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%'
  },
  flex_col: {
    flexDirection: 'column'
  },
  flex_row: {
    flexDirection: 'row'
  },
  header_image: {
    width: 100,
    height: 100
  },
  order_payment_input_container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 10
  },
  assessments_input_container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 10
  },
  underline: {
    borderBottom: '1px solid black',
    width: '80%'
  },
  underline_40: {
    borderBottom: '1px solid black',
    width: '40%',
    textAlign: 'center'
  },
  row_60: {
    flexDirection: 'row',
    width: '60%'
  },
  row_50: {
    flexDirection: 'row',
    width: '50%'
  },
  row_45: {
    flexDirection: 'row',
    width: '45%'
  },
  row_full: {
    flexDirection: 'row',
    width: '100%'
  }
});

const Documents = ({ staff_name, total_assessment, feesList, orderPaymentInputValues }: {
  staff_name: string
  total_assessment: number
  feesList: FeeList[]
  orderPaymentInputValues: OrderPaymentValuesTypes
}) => (

    <Document>
        <Page size="A4" style={styles.page}>

        <View style={styles.header_text_logo_container}>
            <Image source={"/img/lungsod_ng_panabo_logo.jpg"} style={styles.header_image} />
            <View style={styles.flex_col}>
            <Text>Republic of the Philippines</Text>
            <Text>City Government of Panabo</Text>
            <Text>OFFICE OF THE BUILDING OFFICIAL</Text>
            </View>
        </View>

        <View style={styles.order_payment_input_container}>

            <Text>ORDER OR PAYMENT</Text>
            <View style={[styles.flex_row, { justifyContent: 'space-between', width: '60%' }]}>

            <View style={styles.flex_row}>
                <Text>Ass. Cntrl No.</Text>
                <Text>{orderPaymentInputValues.controlNumber}</Text>
            </View>

            <View style={styles.flex_row}>
                <Text>Date:</Text>
                <Text>{orderPaymentInputValues.date}</Text>
            </View>
            </View>

            <View style={styles.row_60}>
                <Text>Name:</Text>
                <Text>{orderPaymentInputValues.name}</Text>
            </View>

            <View style={styles.row_60}>
                <Text>Permit:</Text>
                <Text>{orderPaymentInputValues.permit_type}</Text>
            </View>

            <View style={styles.row_60}>
                <Text>Project:</Text>
                <View style={[styles.row_60, { gap: 30 }]}>
                    <Text>Proposed</Text>
                    <Text style={styles.underline}>{orderPaymentInputValues.projectProposed}</Text>
                </View>
            </View>

            <View style={styles.row_60}>
                <Text>Location:</Text>
                <Text>{orderPaymentInputValues.location}</Text>
            </View>

            <View style={styles.row_60}>
                <Text>Units:</Text>
                <Text>{orderPaymentInputValues.units}</Text>
            </View>
        </View>


        <View style={styles.assessments_input_container}>
            <Text>ASSESSMENTS</Text>
            {feesList.map((data) => (
                <View key={data.name} style={[styles.row_60, { gap: 10 }]}>
                    <Text>{data.name}</Text>
                    <Text style={styles.underline_40}>P{data.value}</Text>
                </View>
            ))}
        </View>

        <View style={[styles.assessments_input_container, { gap: 15, marginTop: 7 }]}>
            <View style={[styles.row_50, { gap: 10 }]}>
                <Text>Total Assessment</Text>
                <Text style={styles.underline_40}>P{total_assessment}</Text>
            </View>

            <View style={[styles.row_45, { gap: 40 }]}>
                <Text>Assessed by:</Text>
                <Text>{staff_name}</Text>
            </View>
        </View>

        </Page>
    </Document>
);

export const AssessmentsPDF = ({ application_id, setAssessment }: {
  application_id: number | undefined,
  setAssessment: React.Dispatch<React.SetStateAction<boolean>>,
}) => {

  const { data: response } = useQuery({
    queryKey: ["login_account"],
    queryFn: FetchLoginAccount,
  });

  const loginAccount = response?.data;

  const assessmentQuery = useQuery({
    queryKey: ['assessments', application_id],
    queryFn: async () => {
      const data = await FetchAssessments(application_id);
      return data;
    },
  });

  const currentDate = getCurrentFormattedDate()
  const assessments = assessmentQuery.data;

  const feesList: FeeList[] = [
    { name: "Building Construction Fee", value: assessments?.building_construction || 0 },
    { name: "Electrical Installation Fee", value: assessments?.electrical_installation || 0 },
    { name: "Mechanical Installation Fee", value: assessments?.mechanical_installation || 0 },
    { name: "Plumbing Installation Fee", value: assessments?.plumbing_installation || 0 },
    { name: "Electronic Installation Fee", value: assessments?.electronics_installation || 0 },
    { name: "Building Accessories Fee", value: assessments?.building_accessories || 0 },
    { name: "Other Accessories Fee", value: assessments?.other_accessories || 0 },
    { name: "Building Occupancy Fee", value: assessments?.building_occupancy || 0 },
    { name: "Building Inspection Fee", value: assessments?.building_inspection || 0 },
    { name: "Fines/Surcharges/Penalties", value: assessments?.fines_surcharges_penalties || 0 },
  ];

  const orderPaymentInputValues: OrderPaymentValuesTypes = {
    controlNumber: assessments?.assessment_controlNo || "",
    date: currentDate || "",
    name: assessments?.applicantName || "",
    permit_type: assessments?.permitType || "",
    projectProposed: assessments?.project_proposed || "",
    location: assessments?.location || "",
    units: assessments?.units || ""
  }

  const [pdfUrl, setPdfUrl] = useState<string>('');

  useEffect(() => {
    const generatePdf = async () => {
      const doc = (
        <Documents
          staff_name={loginAccount.name}
          total_assessment={assessments?.total_assessments || 0}
          feesList={feesList}
          orderPaymentInputValues={orderPaymentInputValues}
        />
      );

      const asPdf = pdf();
      asPdf.updateContainer(doc);
      const blob = await asPdf.toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };

    if (assessments && loginAccount) {
      generatePdf();
    }

  }, [assessments, loginAccount]);

  const printPdf = () => {
    if (pdfUrl) {
      const newWindow = window.open(pdfUrl);

      if (newWindow) {
        newWindow.addEventListener('load', () => {
          newWindow.print();
          newWindow.addEventListener('afterprint', () => {
            newWindow.close();
          });
        });
      }

      setAssessment(false)
    }
  };

  return (
    <div className="fixed top-0 w-1/2 h-screen bg-white p-8 rounded-md">
      {pdfUrl && (
        <div className='flex flex-col h-full'>
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
          <div className="flex flex-col gap-2 mt-4 text-white font-bold">
            <button
              className="bg-orange-500 rounded-md p-2 hover:opacity-75"
              onClick={printPdf}
            >
              Print
            </button>
            
          </div>
        </div>
      )}
      {!pdfUrl && <div>Loading...</div>}
    </div>
  );
};

export default AssessmentsPDF;
