import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './signin.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { COLORS, SIZES } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeightSpacer, ReusableBtn, WidthSpacer } from '../../components';

const validationSchema = Yup.object().shape({
password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required('Required'),

username: Yup.string()
    .min(5, "Username must be at least 5 characters")
    .required('Required'),

email: Yup.string()
    .email("Provide a valid email")
    .required('Required')
});

const Registration = () => {
const [loader, setLoader] = useState(false);
const [responseData, setResponseData] = useState(null);
const [obsecureText, setObsecureText] = useState(null);

  return (
      <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => {
            console.log(value);
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched
        }) => (
          <View style={{paddingTop: 15}}>

             <View style={styles.wrapper}>
                <Text style={styles.label}>Username</Text>
                <View>
                 <View style={styles.inputWrapper(touched.username ? COLORS.lightGrey: COLORS.gray
                )}
                >
                
                <MaterialCommunityIcons
                name='face-man-profile'
                size={20}
                color={COLORS.gray}
                />

                <WidthSpacer width={10}/>

                <TextInput
                placeholder='Enter username'
                onFocus={()=>{setFieldTouched('username')}}
                onBlur={()=> {setFieldTouched('username')}}
                value={values.email}
                onChangeText={handleChange('username')}
                autoCapitalize='none'
                autoCorrect={false}
                style={{flex: 1}}
                />
                 </View>
                 {touched.username && errors.username &&(
                    <Text style={styles.erorMeessage}>{errors.username}</Text>
                 )}
              </View>
            </View>

            <View style={styles.wrapper}>
                <Text style={styles.label}>Email</Text>
                <View>
                 <View style={styles.inputWrapper(touched.email ? COLORS.lightGrey: COLORS.gray
                )}
                >
                
                <MaterialCommunityIcons
                name='email-outline'
                size={20}
                color={COLORS.gray}
                />

                <WidthSpacer width={10}/>

                <TextInput
                placeholder='Enter email'
                onFocus={()=>{setFieldTouched('email')}}
                onBlur={()=> {setFieldTouched('email')}}
                value={values.email}
                onChangeText={handleChange('email')}
                autoCapitalize='none'
                autoCorrect={false}
                style={{flex: 1}}
                />
                 </View>
                 {touched.email && errors.email &&(
                    <Text style={styles.erorMeessage}>{errors.email}</Text>
                 )}
              </View>
            </View>

            <View style={styles.wrapper}>
                <Text style={styles.label}>Password</Text>
                <View>
                 <View style={styles.inputWrapper(touched.password ? COLORS.lightGrey: COLORS.gray
                )}
                > 
                
                <MaterialCommunityIcons
                name='lock-outline'
                size={20}
                color={COLORS.gray}
                />

                <WidthSpacer width={10}/>

                <TextInput
                secureTextEntry={obsecureText}
                placeholder='Enter password'
                onFocus={()=>{setFieldTouched('password')}}
                onBlur={()=> {setFieldTouched('password', "")}}
                value={values.password}
                onChangeText={handleChange('password')}
                autoCapitalize='none'
                autoCorrect={false}
                style={{flex: 1}}
                />
                
                <TouchableOpacity onPress={()=>{
                    setObsecureText(!obsecureText)
                }}>
                    <MaterialCommunityIcons
                    name={obsecureText ? "eye-outline": "eye-off-outline"}
                    size={18}
                    />
                </TouchableOpacity>


                 </View>
                 {touched.password && errors.password &&(
                    <Text style={styles.erorMeessage}>{errors.password}</Text>
                 )}
              </View>
            </View>

        <HeightSpacer height={20}/>

        <ReusableBtn
        onPress={()=> {handleSubmit}}
        btnText={"REGISTER"}
        width={SIZES.width-40}
        backgorundColor={COLORS.yellow}
        borderColor={COLORS.yellow}
        borderWidth={0}
        textColor={COLORS.white}
        />        

          </View>
        )}
      </Formik>
    </View>
  )
}

export default Registration

