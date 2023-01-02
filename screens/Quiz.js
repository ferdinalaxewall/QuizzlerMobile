/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { primaryColor, secondaryColor, styles } from '../style/style';
import Loader from '../components/Loader';

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [quest, setQuest] = useState(0);
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const totalQuestion = 10;
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=' + totalQuestion + '&type=multiple&encode=url3986';
    const res = await fetch(url);
    const { results } = await res.json();
    setIsLoading(false);
    setQuestions(results);
    setOptions(generateAndShuffleArray(results[0]));
  };

  const generateAndShuffleArray = (_question) => {
    const { correct_answer, incorrect_answers } = _question;
    const opt = [correct_answer, ...incorrect_answers];
    shuffleArray(opt);

    return opt;
  };

  useEffect(() => {
    getQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextPress = () => {
   setQuest(quest + 1);
   setOptions(generateAndShuffleArray(questions[quest + 1]));
  };

  const handleSelectedOption = (answer) => {
    const checkAnswer = answer === questions[quest].correct_answer;
    setResult([...result, checkAnswer]);
    quest !== (totalQuestion - 1) && handleNextPress();
  };

  const handleSkipPress = () => {
    handleSelectedOption('');
  };

  useEffect(() => {
    if (result.length === totalQuestion){
      const handleResult = () => {
        const totalCorrectAnswer = result.filter(item => item === true).length;
        const score = Math.round((totalCorrectAnswer / totalQuestion) * 100);
        navigation.navigate('Result', {
          score,
        });
      };

      handleResult();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  if (isLoading){
    return (
      <Loader />
    );
  } else {

    return (
      <View style={styles.container}>
        {questions && (
          <>
            <View style={inStyles.header}>
              <Title text="Question" />
            </View>
            <View style={inStyles.body}>
              <Text style={inStyles.question}>{quest + 1}. {decodeURIComponent(questions[quest]?.question ?? '')}</Text>

              {options.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleSelectedOption(option)}>
                  <Text style={inStyles.option}>{decodeURIComponent(option)}</Text>
                </TouchableOpacity>
              ))}

            </View>
            <View style={inStyles.footer}>
              <TouchableOpacity style={[styles.primaryButton, inStyles.button]} onPress={() => handleSkipPress()}>
                  <Text style={[styles.primaryButtonText]}>SKIP</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    );
  }
};

export default Quiz;

const inStyles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
    },

    header: {
        marginVertical: 16,
    },

    body: {
        marginVertical: 16,
        flex: 1,
        // alignItems: 'center'
    },

    footer: {
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    // Body
    question: {
      fontSize: 20,
      color: '#121212',
      marginTop: 10,
      marginBottom: 25,
    },
    option: {
      backgroundColor: secondaryColor,
      borderWidth: 1,
      borderColor: primaryColor,
      borderRadius: 10,
      marginBottom: 10,
      fontSize: 18,
      paddingVertical: 7,
      paddingHorizontal: 15,
    },

    // Footer
    button: {
      padding: 12.5,
      borderRadius: 10,
    },
});
