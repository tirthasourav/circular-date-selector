/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import CircleSlider from './src/components/CircleSlider';
import {ICONS} from './src/assets/icons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      totalDays: 30,
      month: '',
      color: '#dee2e3',
      activeDates: [12, 18, 28],
      today: 1,
    };
  }

  componentDidMount() {
    this.gettingInformation();
  }

  gettingInformation = () => {
    var date = new Date();
    var month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var value = date.getDate();
    var totalDays = lastDay.getDate();
    const thisDay = date.getDate();
    this.setState({
      value: value,
      totalDays: totalDays,
      month: month[date.getMonth()],
      today: thisDay,
    });
  };
  onValueChange = (value) => {
    this.state.activeDates.indexOf(value) != -1
      ? this.setState({color: '#9281f7'})
      : this.setState({color: '#dee2e3'});
    this.setState({value});
  };

  cardBodyStyle(color) {
    return {
      width: '100%',
      borderRadius: 5,
      backgroundColor: color !== '#9281f7' ? '#5c6777' : color,
      alignItems: 'center',
      paddingVertical: 25,
      paddingHorizontal: 16,
      marginVertical: 25,
      elevation: 13,
    };
  }

  render() {
    const width = 120;
    var {value, totalDays, month, color, activeDates, today} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#b5ddfb" />
          <View style={styles.topSectionContainer}>
            <TouchableOpacity style={styles.settingsIconContainer}>
              <Image source={ICONS.SETTINGS} style={styles.iconGrey} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
              }}>
              @SOURAV
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              width: '100%',
              paddingVertical: 20,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: color,
                  width: width,
                  height: width,
                  borderRadius: width / 2,
                }}>
                <Image
                  style={{
                    width: width - 20,
                    height: width - 20,
                    borderRadius: (width - 20) / 2,
                    borderWidth: 2,
                    borderColor: '#fff',
                  }}
                  source={require('./src/assets/tsd.jpg')}
                />
              </View>
            </View>
            <CircleSlider
              arcDirection={'CW'}
              backgroundColor={'#dee2e3'}
              btnRadius={14}
              dotColor={'#9281f7'}
              dotSize={7}
              dotValues={activeDates}
              btnColor="#b5ddfb"
              sliderRadius={100}
              sliderWidth={17}
              startDegree={today}
              maxValue={totalDays}
              value={value}
              onValueChange={(v) => this.onValueChange(v)}
              endGradient={'#b5ddfb'}
              startGradient={'#b5ddfb'}
            />
          </View>

          <View style={styles.cardContainer}>
            <Text style={styles.chartTitleText}>NATAL CHART</Text>

            <View style={this.cardBodyStyle(color)}>
              <View style={styles.calendarIconParent}>
                <Image source={ICONS.CALENDAR} style={styles.iconWhite} />
              </View>

              {color !== '#9281f7' ? null : (
                <TouchableOpacity style={styles.uploadIconParent}>
                  <Image source={ICONS.UPLOAD} style={styles.iconWhite} />
                </TouchableOpacity>
              )}

              <Text style={styles.dateTxt}>
                {month} {value}
              </Text>

              <Text style={styles.detailTxt}>
                The m56 team designs and develops engaging digital experiences
                for global brands, celebrities and media companies. Our team of
                creatives, architects and technologists have experience building
                all types of consumer digital web and native applications. From
                rapid prototyping of diverse concepts, to integrated voice
                applications and full scale data powered e-commerce and
                community engagement sites, we tie together all aspect of the
                client’s AND consumer’s digital needs.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topSectionContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  detailTxt: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff',
  },
  dateTxt: {
    marginTop: 15,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  calendarIconParent: {
    position: 'absolute',
    left: '45%',
    top: -20,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#e58a88',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWhite: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  iconGrey: {
    width: 30,
    height: 30,
    tintColor: 'grey',
  },
  uploadIconParent: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  settingsIconContainer: {
    position: 'absolute',
    right: 20,
  },
  chartTitleText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: '#dee2e3',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});
