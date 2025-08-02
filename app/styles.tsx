import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  aujourdhui: {
    backgroundColor: "#E26878", 
    color: "white",
    paddingVertical: 15,
    paddingHorizontal: 32,
    textAlign: "center",
    fontSize: 16,
    borderRadius: 10,
    marginBottom: 15,
    
    
  },
   
  h1 : {
    fontSize: 24,
    fontWeight: "bold",
    color:'#03045E', 
    marginBottom:10
  }, 
  button : {
    backgroundColor: "#C84630", 
    borderRadius:10, 
    width: 150, 
    paddingVertical: 15, 
    paddingHorizontal: 32

  }, 

  button_delete_pensee : {
    backgroundColor: "rgba(252, 8, 41, 0.8)", 
    borderRadius:10, 
    width: 150, 
    paddingVertical: 15, 
    paddingHorizontal: 32, 

  }, 
  
  button_text : {
    color:'white', 
    textAlign:'center', 
    fontSize:16
  }, 

  title_solution: {
    flexDirection:'row',  
    justifyContent:'space-between', 
    paddingLeft: 10,
  
  },

  close_button : {  
    fontSize: 20,  
    paddingHorizontal: 16, 
    backgroundColor:'rgba(252, 8, 41, 0.8)', 
    

  }, 

  description_solution_text : {
    fontSize : 19, 
    paddingLeft:10, 
    marginTop:-5
      
  }
  
});
export default styles;