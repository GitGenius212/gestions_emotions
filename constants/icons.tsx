import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';

const lightBulb_on = <MaterialCommunityIcons 
      style={{
        position: 'absolute',
        top:5, 
        left: 10,
      }}
      name="lightbulb-on" size={24} color="grey" />

const lightningBolt = <MaterialCommunityIcons 
      style={{
        position: 'absolute',
        top:9, 
        left: 5,
      }}
      name="lightning-bolt" size={24} color="grey" />

const message_processing = <MaterialCommunityIcons 
      style={{
        position: 'absolute',
        top:10, 
        left: 10,
      }}
      name="message-processing" size={24} color="grey" />

const compass = <FontAwesome name="compass" size={24}/>


const tachometer = <FontAwesome name="tachometer" size={24}/>

export const icons = {
    lightBulb_on, 
    lightningBolt, 
    message_processing, 
    compass, 
    tachometer

    // Add more icons as needed
};