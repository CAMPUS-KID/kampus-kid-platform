import { Data, Routes } from '@shared_constants';
import { useBuildStyles, useNavigate } from '@shared_hooks';
import { update } from 'ramda';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styleSheet } from './styles';

const ScheduleScreen = () => {
  const userEntry = "jeisson@unal.edu.co"
  const styles = useBuildStyles(styleSheet);
  const { t } = useTranslation();

  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');

  const getMondayList = () => {
    const foundUser = Data.users.find((user)=>user.email.toLowerCase() == userEntry.toLowerCase());
    if(foundUser){
      let mSchedule = "";
      if(foundUser.schedule.monday.m7 != "")
        mSchedule = mSchedule + "07:00 - 09:00: " + foundUser.schedule.monday.m7 + "\n";
      if(foundUser.schedule.monday.m8 != "")
        mSchedule = mSchedule + "08:00 - 10:00: " + foundUser.schedule.monday.m8 + "\n";
      if(foundUser.schedule.monday.m9 != "")
        mSchedule = mSchedule + "09:00 - 11:00: " + foundUser.schedule.monday.m9 + "\n";
      if(foundUser.schedule.monday.m10 != "")
        mSchedule = mSchedule + "10:00 - 12:00: " + foundUser.schedule.monday.m10 + "\n";
      if(foundUser.schedule.monday.m11 != "")
        mSchedule = mSchedule + "11:00 - 13:00: " + foundUser.schedule.monday.m11 + "\n";
      if(foundUser.schedule.monday.m12 != "")
        mSchedule = mSchedule + "12:00 - 14:00: " + foundUser.schedule.monday.m12 + "\n";
      if(foundUser.schedule.monday.m13 != "")
        mSchedule = mSchedule + "13:00 - 15:00: " + foundUser.schedule.monday.m13 + "\n";
      if(foundUser.schedule.monday.m14 != "")
        mSchedule = mSchedule + "14:00 - 16:00: " + foundUser.schedule.monday.m14 + "\n";
      if(foundUser.schedule.monday.m15 != "")
        mSchedule = mSchedule + "15:00 - 17:00: " + foundUser.schedule.monday.m15 + "\n";
      if(foundUser.schedule.monday.m16 != "")
        mSchedule = mSchedule + "16:00 - 18:00: " + foundUser.schedule.monday.m16 + "\n";
      if(foundUser.schedule.monday.m17 != "")
        mSchedule = mSchedule + "17:00 - 19:00: " + foundUser.schedule.monday.m17 + "\n";
      if(foundUser.schedule.monday.m18 != "")
        mSchedule = mSchedule + "18:00 - 20:00: " + foundUser.schedule.monday.m18 + "\n";
      return mSchedule;
    }else{
      alert("User not found");
    }
    return ""
  }

  const getTuesdayList = () => {
    const foundUser = Data.users.find((user)=>user.email.toLowerCase() == userEntry.toLowerCase());
    if(foundUser){
      let mSchedule = "";
      if(foundUser.schedule.tuesday.t7 != "")
        mSchedule = mSchedule + "07:00 - 09:00: " + foundUser.schedule.tuesday.t7 + "\n";
      if(foundUser.schedule.tuesday.t8 != "")
        mSchedule = mSchedule + "08:00 - 10:00: " + foundUser.schedule.tuesday.t8 + "\n";
      if(foundUser.schedule.tuesday.t9 != "")
        mSchedule = mSchedule + "09:00 - 11:00: " + foundUser.schedule.tuesday.t9 + "\n";
      if(foundUser.schedule.tuesday.t10 != "")
        mSchedule = mSchedule + "10:00 - 12:00: " + foundUser.schedule.tuesday.t10 + "\n";
      if(foundUser.schedule.tuesday.t11 != "")
        mSchedule = mSchedule + "11:00 - 13:00: " + foundUser.schedule.tuesday.t11 + "\n";
      if(foundUser.schedule.tuesday.t12 != "")
        mSchedule = mSchedule + "12:00 - 14:00: " + foundUser.schedule.tuesday.t12 + "\n";
      if(foundUser.schedule.tuesday.t13 != "")
        mSchedule = mSchedule + "13:00 - 15:00: " + foundUser.schedule.tuesday.t13 + "\n";
      if(foundUser.schedule.tuesday.t14 != "")
        mSchedule = mSchedule + "14:00 - 16:00: " + foundUser.schedule.tuesday.t14 + "\n";
      if(foundUser.schedule.tuesday.t15 != "")
        mSchedule = mSchedule + "15:00 - 17:00: " + foundUser.schedule.tuesday.t15 + "\n";
      if(foundUser.schedule.tuesday.t16 != "")
        mSchedule = mSchedule + "16:00 - 18:00: " + foundUser.schedule.tuesday.t16 + "\n";
      if(foundUser.schedule.tuesday.t17 != "")
        mSchedule = mSchedule + "17:00 - 19:00: " + foundUser.schedule.tuesday.t17 + "\n";
      if(foundUser.schedule.tuesday.t18 != "")
        mSchedule = mSchedule + "18:00 - 20:00: " + foundUser.schedule.tuesday.t18 + "\n";
      return mSchedule;
    }else{
      alert("User not found");
    }
    return ""
  }

  const getWednesdayList = () => {
    const foundUser = Data.users.find((user)=>user.email.toLowerCase() == userEntry.toLowerCase());
    if(foundUser){
      let mSchedule = "";
      if(foundUser.schedule.wednesday.w7 != "")
        mSchedule = mSchedule + "07:00 - 09:00: " + foundUser.schedule.wednesday.w7 + "\n";
      if(foundUser.schedule.wednesday.w8 != "")
        mSchedule = mSchedule + "08:00 - 10:00: " + foundUser.schedule.wednesday.w8 + "\n";
      if(foundUser.schedule.wednesday.w9 != "")
        mSchedule = mSchedule + "09:00 - 11:00: " + foundUser.schedule.wednesday.w9 + "\n";
      if(foundUser.schedule.wednesday.w10 != "")
        mSchedule = mSchedule + "10:00 - 12:00: " + foundUser.schedule.wednesday.w10 + "\n";
      if(foundUser.schedule.wednesday.w11 != "")
        mSchedule = mSchedule + "11:00 - 13:00: " + foundUser.schedule.wednesday.w11 + "\n";
      if(foundUser.schedule.wednesday.w12 != "")
        mSchedule = mSchedule + "12:00 - 14:00: " + foundUser.schedule.wednesday.w12 + "\n";
      if(foundUser.schedule.wednesday.w13 != "")
        mSchedule = mSchedule + "13:00 - 15:00: " + foundUser.schedule.wednesday.w13 + "\n";
      if(foundUser.schedule.wednesday.w14 != "")
        mSchedule = mSchedule + "14:00 - 16:00: " + foundUser.schedule.wednesday.w14 + "\n";
      if(foundUser.schedule.wednesday.w15 != "")
        mSchedule = mSchedule + "15:00 - 17:00: " + foundUser.schedule.wednesday.w15 + "\n";
      if(foundUser.schedule.wednesday.w16 != "")
        mSchedule = mSchedule + "16:00 - 18:00: " + foundUser.schedule.wednesday.w16 + "\n";
      if(foundUser.schedule.wednesday.w17 != "")
        mSchedule = mSchedule + "17:00 - 19:00: " + foundUser.schedule.wednesday.w17 + "\n";
      if(foundUser.schedule.wednesday.w18 != "")
        mSchedule = mSchedule + "18:00 - 20:00: " + foundUser.schedule.wednesday.w18 + "\n";
      return mSchedule;
    }else{
      alert("User not found");
    }
    return ""
  }

  const getThursdayList = () => {
    const foundUser = Data.users.find((user)=>user.email.toLowerCase() == userEntry.toLowerCase());
    if(foundUser){
      let mSchedule = "";
      if(foundUser.schedule.thursday.x7 != "")
        mSchedule = mSchedule + "07:00 - 09:00: " + foundUser.schedule.thursday.x7 + "\n";
      if(foundUser.schedule.thursday.x8 != "")
        mSchedule = mSchedule + "08:00 - 10:00: " + foundUser.schedule.thursday.x8 + "\n";
      if(foundUser.schedule.thursday.x9 != "")
        mSchedule = mSchedule + "09:00 - 11:00: " + foundUser.schedule.thursday.x9 + "\n";
      if(foundUser.schedule.thursday.x10 != "")
        mSchedule = mSchedule + "10:00 - 12:00: " + foundUser.schedule.thursday.x10 + "\n";
      if(foundUser.schedule.thursday.x11 != "")
        mSchedule = mSchedule + "11:00 - 13:00: " + foundUser.schedule.thursday.x11 + "\n";
      if(foundUser.schedule.thursday.x12 != "")
        mSchedule = mSchedule + "12:00 - 14:00: " + foundUser.schedule.thursday.x12 + "\n";
      if(foundUser.schedule.thursday.x13 != "")
        mSchedule = mSchedule + "13:00 - 15:00: " + foundUser.schedule.thursday.x13 + "\n";
      if(foundUser.schedule.thursday.x14 != "")
        mSchedule = mSchedule + "14:00 - 16:00: " + foundUser.schedule.thursday.x14 + "\n";
      if(foundUser.schedule.thursday.x15 != "")
        mSchedule = mSchedule + "15:00 - 17:00: " + foundUser.schedule.thursday.x15 + "\n";
      if(foundUser.schedule.thursday.x16 != "")
        mSchedule = mSchedule + "16:00 - 18:00: " + foundUser.schedule.thursday.x16 + "\n";
      if(foundUser.schedule.thursday.x17 != "")
        mSchedule = mSchedule + "17:00 - 19:00: " + foundUser.schedule.thursday.x17 + "\n";
      if(foundUser.schedule.thursday.x18 != "")
        mSchedule = mSchedule + "18:00 - 20:00: " + foundUser.schedule.thursday.x18 + "\n";
      return mSchedule;
    }else{
      alert("User not found");
    }
    return ""
  }

  const getFridayList = () => {
    const foundUser = Data.users.find((user)=>user.email.toLowerCase() == userEntry.toLowerCase());
    if(foundUser){
      let mSchedule = "";
      if(foundUser.schedule.friday.f7 != "")
        mSchedule = mSchedule + "07:00 - 09:00: " + foundUser.schedule.friday.f7 + "\n";
      if(foundUser.schedule.friday.f8 != "")
        mSchedule = mSchedule + "08:00 - 10:00: " + foundUser.schedule.friday.f8 + "\n";
      if(foundUser.schedule.friday.f9 != "")
        mSchedule = mSchedule + "09:00 - 11:00: " + foundUser.schedule.friday.f9 + "\n";
      if(foundUser.schedule.friday.f10 != "")
        mSchedule = mSchedule + "10:00 - 12:00: " + foundUser.schedule.friday.f10 + "\n";
      if(foundUser.schedule.friday.f11 != "")
        mSchedule = mSchedule + "11:00 - 13:00: " + foundUser.schedule.friday.f11 + "\n";
      if(foundUser.schedule.friday.f12 != "")
        mSchedule = mSchedule + "12:00 - 14:00: " + foundUser.schedule.friday.f12 + "\n";
      if(foundUser.schedule.friday.f13 != "")
        mSchedule = mSchedule + "13:00 - 15:00: " + foundUser.schedule.friday.f13 + "\n";
      if(foundUser.schedule.friday.f14 != "")
        mSchedule = mSchedule + "14:00 - 16:00: " + foundUser.schedule.friday.f14 + "\n";
      if(foundUser.schedule.friday.f15 != "")
        mSchedule = mSchedule + "15:00 - 17:00: " + foundUser.schedule.friday.f15 + "\n";
      if(foundUser.schedule.friday.f16 != "")
        mSchedule = mSchedule + "16:00 - 18:00: " + foundUser.schedule.friday.f16 + "\n";
      if(foundUser.schedule.friday.f17 != "")
        mSchedule = mSchedule + "17:00 - 19:00: " + foundUser.schedule.friday.f17 + "\n";
      if(foundUser.schedule.friday.f18 != "")
        mSchedule = mSchedule + "18:00 - 20:00: " + foundUser.schedule.friday.f18 + "\n";
      return mSchedule;
    }else{
      alert("User not found");
    }
    return ""
  }

  const upd = () =>{
    setMonday(getMondayList);
    setTuesday(getTuesdayList);
    setWednesday(getWednesdayList);
    setThursday(getThursdayList);
    setFriday(getFridayList);
  }

  return (
  <SafeAreaView>
    <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{t('schedule:title')}</Text>

          <Text style={styles.section}>{t('schedule:1')}</Text>
          <Text style={styles.normal}>{monday}</Text>

          <Text style={styles.section}>{t('schedule:2')}</Text>
          <Text style={styles.normal}>{tuesday}</Text>

          <Text style={styles.section}>{t('schedule:3')}</Text>
          <Text style={styles.normal}>{wednesday}</Text>

          <Text style={styles.section}>{t('schedule:4')}</Text>
          <Text style={styles.normal}>{thursday}</Text>

          <Text style={styles.section}>{t('schedule:5')}</Text>
          <Text style={styles.normal}>{friday}</Text>
          <Pressable
            style={styles.button}
            onPress={upd}>
            <Text style={styles.buttonText}>Refresh</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
