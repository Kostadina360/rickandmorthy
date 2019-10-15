import React from 'react';
import {View, Text, Image} from 'react-native';
import {Style} from './style'

class CharacterDetails extends React.Component{
     render(){
        return(
               <View style={Style.containerOne}>
                    <Text style={Style.containerItems}>{this.props.data.name}</Text>
                    <Text style={Style.containerItems}>{this.props.data.status}</Text>
                    <Text style={Style.containerItems}>{this.props.data.species}</Text>
                    <Text style={Style.containerItems}>{this.props.data.gender}</Text>
                    <Text style={Style.containerItems}>{this.props.data.origin}</Text>
                    <Text style={Style.containerItems}>{this.props.data.location}</Text>
                </View>               
        
        );
    }
}
export default CharacterDetails;