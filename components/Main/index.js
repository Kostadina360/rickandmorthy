import React from 'react';
import { View, Text , ScrollView } from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import Header from '../Header';
import CharacterList from '../CharacterList';


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: [],
        };
    }

    componentDidMount() {
        fetch(
            'https://rickandmortyapi.com/api/character/',
            {method: 'get'}
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({characters: data.results});
        });
    }

    render() {
         return (
            <NativeRouter> 
                <View>
                    <Header/>
                        <ScrollView>
                           <Link to="/characters">
                                <Route
                                    path="/:name"
                                    render={()=> <CharacterList characters={this.state.characters}/>}
                                />
                            </Link>
                        </ScrollView>
                </View>
            </NativeRouter>
                   
        );
    }
}

export default Main;