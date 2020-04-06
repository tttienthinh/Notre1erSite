import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Triangle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cote1: '',
            cote2: '',
            cote3: '',
            resultat: "Le Résultat s'affichera ici"
        }
    }

    _printResult(text) {
        this.setState({resultat: text});
    }

    _validation() {
        console.log('onPress')
        let tab = [Number(this.state.cote1), Number(this.state.cote2), Number(this.state.cote3)];

        this._printResult(`${tab[0]}; ${tab[1]}; ${tab[2]}`);
        let define = true;
        let valid = true;
        let invalid_values = '';
        let message;
        for (let i=0; i<3; i++) {
            if (isNaN(tab[i])) {
                define = false;
                invalid_values += `${i+1} `
            } 
        }
        if (define) {
            if (tab[0] >= tab[1]+tab[2]) {
                valid = false
                message = 'Wouaaawww le côté 1 est beaucoup trop grand';
            } else if (tab[1] >= tab[0]+tab[2]) {
                valid = false
                message = 'Wouaaawww le côté 2 est beaucoup trop grand';
            } else if (tab[2] >= tab[1]+tab[0]) {
                valid = false
                message = 'Wouaaawww le côté 3 est beaucoup trop grand';
            }
        }
        if (define && valid) {
            if (tab[0] == tab[1] && tab[1] == tab[2]) {
                this._printResult(`Un triangle équilatéral de côté ${tab[0]}`);
            } 
            else if (tab[0] == tab[1]) {
                this._printResult(`Un triangle isocèle de côté ${tab[0]} et de base ${tab[2]}`);
            } else if (tab[1] == tab[2]) {
                this._printResult(`Un triangle isocèle de côté ${tab[1]} et de base ${tab[0]}`);
            } else if (tab[2] == tab[0]) {
                this._printResult(`Un triangle isocèle de côté ${tab[2]} et de base ${tab[1]}`);
            } 
            else if (Math.max.apply(null, tab) == tab[0] && Math.pow(tab[0], 2) == Math.pow(tab[1], 2)+Math.pow(tab[2], 2)) {
                this._printResult(`Un triangle rectangle d'hypoténuse ${tab[0]}`);
            } else if (Math.max.apply(null, tab) == tab[1] && Math.pow(tab[1], 2) == Math.pow(tab[0], 2)+Math.pow(tab[2], 2)) {
                this._printResult(`Un triangle rectangle d'hypoténuse ${tab[1]}`);
            } else if (Math.max.apply(null, tab) == tab[2] && Math.pow(tab[2], 2) == Math.pow(tab[1], 2)+Math.pow(tab[0], 2)) {
                this._printResult(`Un triangle rectangle d'hypoténuse ${tab[2]}`);
            }
            
            else {
                this._printResult(`Un triangle quelconque, Nickel tu me fais perdre mon temps !`);
            }
        } else if (!define) {
            this._printResult(`Oups la case ${invalid_values}n'est pas encore définie`);
        } else {
            this._printResult(message);
        }
    }

    _typing(text, bloc) {
        console.log(`typing ${text} into ${bloc}`)
        switch (bloc) {
            case 1:
                this.setState({cote1: text});
                break;
            case 2:
                this.setState({cote2: text})
                break;
            case 3:
                this.setState({cote3: text})
                break;
        }
    }




    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Jeff & 4T</Text>
                    <Text>Triangle</Text>
                </View>
                <View>
                    <View>
                        <Text>Entre côté 1 : </Text>
                        <TextInput 
                            placeholder='Valeur entière'
                            onChangeText={(text) => this._typing(text, 1)}
                        />
                    </View>
                    <View>
                        <Text>Entre côté 2 : </Text>
                        <TextInput 
                            placeholder='Valeur entière'
                            onChangeText={(text) => this._typing(text, 2)}
                        />
                    </View>
                    <View>
                        <Text>Entre côté 3 : </Text>
                        <TextInput 
                            placeholder='Valeur entière'
                            onChangeText={(text) => this._typing(text, 3)}
                        />
                    </View>
                </View>
                <View>
                    <Text>Ton triangle est : </Text>
                    <Text>{this.state.resultat}</Text>
                </View>
                <Button title='Valider' onPress={() => this._validation()}/>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });