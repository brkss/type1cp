import React, { useRef } from "react";
import { View, Switch, Text, StyleSheet, ScrollView } from "react-native";
import { IBaseData } from '../utils/types/BaseData';
import { Input, Toggler, Button } from '.';
import { HistoryDocument, HistoryQuery, useUpdateBaseDataMutation } from "../generated/graphql";
interface Props {
  data: IBaseData;
  id: number;
}

export const DataDrawer : React.FC<Props> = ({data, id}) => {
  
  const [form, SetForm] = React.useState({
    bg_before: data.bg_before,
    carbs: data.carbs,
    bg_after: data.bg_after || 0,
    correction: data.correction || 0,
    hypoglycemia: data.hypoglycemia || false,
    insulin_taken: data.insulin_taken || 0
  });
  const [updateBaseData] = useUpdateBaseDataMutation();

  const handleForm = (index: string, value: string) => {
    SetForm({
      ...form,
      [index]: value
    });
  }

  // save data !
  const saveData = () => {
    console.log("form => ", form);
    if(!form || !id || !form.bg_before || !form.carbs){
      return;
    }
    updateBaseData({
      variables: {
        bg_before: form.bg_before,
        carbs: form.carbs,
        id: id,
        bg_after: Number(form.bg_after),
        correction: Number(form.correction),
        hypoglycemia: Boolean(form.hypoglycemia),
        insulin_taken: Number(form.insulin_taken)
      },
      update: (store, {data}) => {
        if(!data || !data.updateBaseData.base){
            console.log("did not pass the data check !")
            return null;
        }
        const oldBaseData = store.readQuery<HistoryQuery>({
            query: HistoryDocument
        })?.history
        const newBaseData = data.updateBaseData.base;
        const _index = oldBaseData?.findIndex(x => x.id == id);
        if(_index == -1 || !_index){
          return;
        }
        oldBaseData![_index] = newBaseData;
        console.log('UPDATE DA SHIT')
        store.writeQuery<HistoryQuery>({
            query: HistoryDocument,
            data: {
                history: oldBaseData!
            }
        })
    }
    }).then(res => {
      //console.log("update data => ", res);
    })
  } 

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.date}>{data.date} (id: {id}) </Text>
      <Input label='Blood Glucose Before Eating :' unit='Mg/DL' value={form.bg_before.toString()} onChange={(value: string) => handleForm('bg_before', value)} />
      <Input label='Carbs Taken :' unit='g' value={form.carbs.toString()} onChange={(value: string) => handleForm('carbs', value)} />
      <Input label='Insulin Taken :' unit='units' value={form.insulin_taken?.toString()} onChange={(value: string) => handleForm('insulin_taken', value)} />
      <Input label='Blood Glucose After 2 Hours :' value={form.bg_after?.toString()} unit='Mg/DL' onChange={(value: string) => handleForm('bg_after', value)} />
      <Input label='Correction' unit='Mg/DL' value={form.correction?.toString()} onChange={(value: string) => handleForm('correction', value)} />
      <Toggler onChange={(value) => handleForm('hypoglycemia', value.toString())} label={'Did you had any hypoglycemia ?'} />
      <Button label='Save !' onPress={() => saveData()} />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  titleContainer: {
    marginBottom: 10
  },
  title: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom:4
  },
  date: {
      fontSize: 14,
      marginBottom: 4,
      textAlign: 'right'  
  },
  subtitle: {
      fontSize: 14,
      marginBottom: 4
  }
})