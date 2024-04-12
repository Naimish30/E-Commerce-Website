import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ItemsTable from './ItemTable';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  name: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    fontSize: 22,
    marginBottom: 5
  },
  invoiceNumber: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center'
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
    paddingBottom: 5,
  },
  client: {
    borderTopWidth: 1,
    marginTop: 20,
    marginBottom: 10
  },
});

const Pdf = ({  total, item }) => { // destructuring props
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>Invoice Form</Text>
          <View>
            <Text style={styles.name}>Ecommerce</Text>
          </View>

          <View style={styles.invoiceNumber}>
            <Text style={styles.label}>INVOICE NO.</Text>
            <Text style={styles.input}>CD123</Text>
          </View>

          <View style={styles.invoiceNumber}>
            <Text style={styles.label}>ADDRESS</Text>
            <Text style={styles.input}>Ahmedabad</Text>
          </View>
          
          <View style={styles.client}></View>
          
          <Text style={styles.label}>BILL TO</Text>
          
          <View>
            <Text style={styles.name}>Client Name</Text>
          </View>

          <View style={styles.invoiceNumber}>
            <Text style={styles.label}>CLIENT ADDRESS</Text>
            <Text style={styles.input}>Client Address</Text>
          </View>

          <ItemsTable items={item} total={total} />

        </View>
      </Page>
    </Document>
  );
};

export default Pdf;