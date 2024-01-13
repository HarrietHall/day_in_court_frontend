import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from 'react-native-paper';


const CustomDropDown = ({
  items,
  open,
  setOpen,
  value,
  setValue,
  setItems,
  placeholder,
  zIndex,
  zIndexInverse,
}) => (
  <DropDownPicker
    style={[styles.dropDown]}
    zIndex={zIndex}
    zIndexInverse={zIndexInverse}
    placeholder={placeholder}
    multiple={true}
    min={0}
    max={10}
    open={open}
    value={value}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    setItems={setItems}
    itemKey="key"
    theme="DARK"
    mode="BADGE"
    badgeDotColors={[
      "#e76f51",
      "#00b4d8",
      "#e9c46a",
      "#e76f51",
      "#8ac926",
      "#00b4d8",
      "#e9c46a",
    ]}
  />
);

const CourtFormScreen = ({navigation}) => {
  const [openCourtType, setOpenCourtType] = useState(false);
  const [valueCourtType, setValueCourtType] = useState([]);
  const [selectedCourtType, setSelectedCourtType] = useState([
    { label: "Domestic Violence", key: "1", value:"Domestic Violence"},
    { label: "Trials", key: "2", value:"Trials" },
    { label: "Youth", key: "3", value:"Youth" },
    { label: "Custody", key: "4", value:"Custody" },
    { label: "Other", key: "5", value:"Other" },
  ]);

  const [openMagistrate, setOpenMagistrate] = useState(false);
  const [valueMagistrate, setValueMagistrate] = useState([]);
  const [selectedMagistrate, setSelectedMagistrate] = useState([
    { label: "Alice Johnson", key: "1", value: "Alice Johnson" },
    { label: "Bob Williams", key: "2", value: "Bob Williams" },
    { label: "Eva Martinez", key: "3", value: "Eva Martinez" },
    { label: "Ryan Davis", key: "4", value: "Ryan Davis" },
    { label: "Sophie Thompson", key: "5", value: "Sophie Thompson" },
    { label: "Jack Wilson", key: "6", value: "Jack Wilson" },
    { label: "Lily Brown", key: "7", value: "Lily Brown" },
    { label: "Daniel Lee", key: "8", value: "Daniel Lee" }
  ]);

  const [openClerk, setOpenClerk] = useState(false);
  const [valueClerk, setValueClerk] = useState([]);
  const [selectedClerk, setSelectedClerk] = useState([
    { label: "Sarah Steps", key: "1", value: "Sarah Steps" },
    { label: "Paul Potter", key: "2", value: "Paul Potter" },
    { label: "Maggie Dusk", key: "3", value: "Maggie Dusk" },
    { label: "Ledger Kay", key: "4", value: "Ledger Kay" },
    { label: "Penny Blake", key: "5", value: "Penny Blake" },
    { label: "Steven Strange", key: "6", value: "Steven Strange" },
    { label: "Jack Bricks", key: "7", value: "Jack Bricks" },
    { label: "Jack Jackson", key: "8", value: "Jack Jackson" },
  ]);

  const [openUsher, setOpenUsher] = useState(false);
  const [valueUsher, setValueUsher] = useState([]);
  const [selectedUsher, setSelectedUsher] = useState([
    { label: "Thomas Smith", key: "1", value: "Thomas Smith" },
    { label: "Patty Grace", key: "2", value: "Patty Grace" },
    { label: "Douglas Weather", key: "3", value: "Douglas Weather" },
    { label: "Mick Stack", key: "4", value: "Mick Stack" },
    { label: "Peter James", key: "5", value: "Peter James" },
    { label: "Herbert Heckle", key: "6", value: "Herbert Heckle" },
    { label: "Harrison Grass", key: "7", value: "Harrison Grass" },
    { label: "Lucie Ray", key: "8", value: "Lucie Ray" },
  ]);

  const [openCases, setOpenCases] = useState(false);
  const [valueCases, setValueCases] = useState([]);
  const [selectedCases, setSelectedCases] = useState([
    
    { label: "123345", key: "1", value: { id: "123345", defendant: 'Mr. Chris Bean', case_type: 'theft', defence_lawyer: "Sibley Slater", prosecution_lawyer: "Marty Hemingway", witnesses: ['Jack Jones', 'Peter Small'] }},
  { label: "456789", key: "2", value: { id: "456789", defendant: 'Ms. Olivia Green', case_type: 'fraud', defence_lawyer: "Andrew Turner", prosecution_lawyer: "Emily Williams", witnesses: ['Michael White', 'Emma Brown'] }},
  { label: "987654", key: "3", value: { id: "987654", defendant: 'Mr. Daniel Black', case_type: 'burglary', defence_lawyer: "Sophie Turner", prosecution_lawyer: "David Miller", witnesses: ['Lucy Johnson', 'John Smith'] }},
  { label: "654321", key: "4", value: { id: "654321", defendant: 'Ms. Grace Turner', case_type: 'assault', defence_lawyer: "Chris Robinson", prosecution_lawyer: "Victoria Turner", witnesses: ['Alex Davis', 'Sophia Wilson'] }},
  { label: "111222", key: "5", value: { id: "111222", defendant: 'Mr. Michael White', case_type: 'robbery', defence_lawyer: "Emma Davis", prosecution_lawyer: "Peter Jones", witnesses: ['Olivia Smith', 'Daniel Turner'] }},
  { label: "333444", key: "6", value: { id: "333444", defendant: 'Ms. Emily Brown', case_type: 'fraud', defence_lawyer: "John Green", prosecution_lawyer: "Sophia Miller", witnesses: ['Michael Wilson', 'Lucy Johnson'] }},
  { label: "555666", key: "7", value: { id: "555666", defendant: 'Mr. Jack Robinson', case_type: 'theft', defence_lawyer: "Grace Turner", prosecution_lawyer: "Robert Turner", witnesses: ['Sophie Turner', 'David Davis'] }},
  { label: "777888", key: "8", value: { id: "777888", defendant: 'Ms. Emma Smith', case_type: 'assault', defence_lawyer: "Daniel White", prosecution_lawyer: "Alex Robinson", witnesses: ['Michael Turner', 'Olivia Johnson'] }},
  { label: "999000", key: "9", value: { id: "999000", defendant: 'Mr. Robert Turner', case_type: 'burglary', defence_lawyer: "Sophia Smith", prosecution_lawyer: "Daniel Green", witnesses: ['Emily Wilson', 'Jack Davis'] }},
  { label: "121314", key: "10", value: { id: "121314", defendant: 'Ms. Sophia Davis', case_type: 'robbery', defence_lawyer: "John Miller", prosecution_lawyer: "Lucy Robinson", witnesses: ['Daniel Turner', 'Emma White'] }},
  { label: "151617", key: "11", value: { id: "151617", defendant: 'Mr. David Miller', case_type: 'fraud', defence_lawyer: "Emily Green", prosecution_lawyer: "Daniel Brown", witnesses: ['Sophie Smith', 'Robert Turner'] }},
  { label: "181920", key: "12", value: { id: "181920", defendant: 'Ms. Olivia Wilson', case_type: 'theft', defence_lawyer: "Jack Davis", prosecution_lawyer: "Sophia Turner", witnesses: ['Michael White', 'Emma Brown'] }},
  { label: "212223", key: "13", value: { id: "212223", defendant: 'Mr. Daniel Turner', case_type: 'burglary', defence_lawyer: "Sophia Wilson", prosecution_lawyer: "David Brown", witnesses: ['Lucy Robinson', 'John Smith'] }},
  { label: "242526", key: "14", value: { id: "242526", defendant: 'Ms. Emma Johnson', case_type: 'assault', defence_lawyer: "Daniel Turner", prosecution_lawyer: "Sophie Miller", witnesses: ['Olivia Davis', 'Michael White'] }},
  { label: "272829", key: "15", value: { id: "272829", defendant: 'Mr. Michael Robinson', case_type: 'robbery', defence_lawyer: "Sophia Turner", prosecution_lawyer: "David Smith", witnesses: ['Jack Miller', 'Emily Brown'] }},
  { label: "303132", key: "16", value: { id: "303132", defendant: 'Ms. Sophia Green', case_type: 'fraud', defence_lawyer: "Michael Turner", prosecution_lawyer: "Emma Davis", witnesses: ['Sophie Robinson', 'Daniel White'] }},
  { label: "333435", key: "17", value: { id: "333435", defendant: 'Mr. Jack White', case_type: 'theft', defence_lawyer: "Lucy Davis", prosecution_lawyer: "Daniel Turner", witnesses: ['Olivia Miller', 'Robert Robinson'] }},
  { label: "363738", key: "18", value: { id: "363738", defendant: 'Ms. Lucy Robinson', case_type: 'assault', defence_lawyer: "Daniel Smith", prosecution_lawyer: "Sophia Turner", witnesses: ['John Wilson', 'Emily Brown'] }},
  { label: "394041", key: "19", value: { id: "394041", defendant: 'Mr. Robert Turner', case_type: 'burglary', defence_lawyer: "Sophia Robinson", prosecution_lawyer: "David Turner", witnesses: ['Sophie Davis', 'Michael White'] }},
  { label: "424344", key: "20", value: { id: "424344", defendant: 'Ms. Sophie Davis', case_type: 'robbery', defence_lawyer: "Robert Wilson", prosecution_lawyer: "Sophia Turner", witnesses: ['Daniel Brown', 'Olivia Smith'] }},
]);

  const handleFormSubmit = (data) => {

const formData = {
  courtType: valueCourtType,
  magistrate: valueMagistrate,
  clerk: valueClerk,
  usher: valueUsher,
  cases: valueCases
};
    navigation.navigate("court_completed", { submittedData: formData });
  
  };

  return (
    <View style={styles.root}>
  
        <DropDownPicker
                 style={[styles.dropDown]}
          zIndex={5000}
          zIndexInverse={1000}
          multiple={false}
          items={selectedCourtType}
          open={openCourtType}
          value={valueCourtType}
          setOpen={setOpenCourtType}
          setValue={setValueCourtType}
          setItems={setSelectedCourtType}
          placeholder={<Text style={styles.text}>Select court type</Text>}
          itemKey="key"
          theme='DARK'
          mode="BADGE"
          badgeDotColors={[
            "#e76f51",
            "#00b4d8",
            "#e9c46a",
            "#e76f51",
            "#8ac926",
            "#00b4d8",
            "#e9c46a",
          ]}
       
        />

        <CustomDropDown
          zIndex={4000}
          zIndexInverse={2000}
          items={selectedMagistrate}
          open={openMagistrate}
          value={valueMagistrate}
          setOpen={setOpenMagistrate}
          setValue={setValueMagistrate}
          setItems={setSelectedMagistrate}
          placeholder={<Text style={styles.text}>Select Magistrates</Text>}
        />
        <DropDownPicker
          style={[styles.dropDown]}
          zIndex={3000}
          zIndexInverse={3000}
          items={selectedClerk}
          open={openClerk}
          value={valueClerk}
          setOpen={setOpenClerk}
          setValue={setValueClerk}
          setItems={setSelectedClerk}
          placeholder={<Text style={styles.text}>Select Clerk</Text>}
          itemKey="key"
          theme="DARK"
          mode="BADGE"
          badgeDotColors={[
            "#e76f51",
            "#00b4d8",
            "#e9c46a",
            "#e76f51",
            "#8ac926",
            "#00b4d8",
            "#e9c46a",
          ]}
        />

        <CustomDropDown
          zIndex={2000}
          zIndexInverse={4000}
          items={selectedUsher}
          open={openUsher}
          value={valueUsher}
          setOpen={setOpenUsher}
          setValue={setValueUsher}
          setItems={setSelectedUsher}
          placeholder={<Text style={styles.text}>Select Usher</Text>}
        />

        <CustomDropDown
          zIndex={1000}
          zIndexInverse={5000}
          items={selectedCases}
          open={openCases}
          value={valueCases}
          setOpen={setOpenCases}
          setValue={setValueCases}
          setItems={setSelectedCases}
          placeholder={<Text style={styles.text}>Select Cases</Text>}
          itemKey='key'
        />
        <TouchableOpacity>
      <Button 
     
      mode={"outlined"}style={styles.submit} onPress={handleFormSubmit   
      } > 
       <Text style={styles.buttonText}> CREATE COURT</Text>
        
      </Button>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#B6B1A4",
    alignItems: "center",
    justifyContent: "center",
    padding:15
  },
  submit: {
    borderRadius:3,
    backgroundColor: '#bb5f25',
height:50


  },
  dropDown: {
    borderWidth: 4,
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor:'#333A40',
    borderRadius: 8,
    marginBottom:45,
  
   
  },
  text: {
  color: '#d7ceb2',
    fontSize:18,
    
  },
  buttonText: {
    fontSize:20,
    color: '#333a40'
  }
});

export default CourtFormScreen;

