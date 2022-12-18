import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export function MyButton (props) {
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

export function AddPhotoButton (props) {
    const { onPress } = props;
  return (
      <TouchableOpacity
          style={styles.btnAdd}
          onPress={onPress}
          activeOpacity={0.7}>
      <Text style={styles.btnAddText}>+</Text>
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
    },
    btnAdd: {
        position: 'absolute',
        top: 25,
        left: 230,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FF6C00',

    },
    btnAddText: {
        color: '#FF6C00',
        fontSize: 18,        
    }
})

// export default MyButton;
// export default AddPhotoButton;