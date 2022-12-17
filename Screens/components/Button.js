import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function MyButton (props) {
    const { onPress, title = 'Click' } = props;
  return (
      <TouchableOpacity
          style={styles.btn}
          onPress={onPress}
          activeOpacity={0.7}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btn: {
        marginTop: 46,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },

    btnText: {
        // font-family: 'Roboto';
        // font-style: normal;
        // font-weight: 400;
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
    }
})

export default MyButton;