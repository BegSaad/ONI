import { StyleSheet } from 'react-native';
import { moderateScale, textScale, verticalScale } from '../../utils';
import { metrics } from '../../themes';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: moderateScale(10),
  },

  header: {
    height: verticalScale(81),
    ...metrics.paddings.pV20,
    ...metrics.paddings.pH16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  textcontainer: {
    alignItems: 'center',
  },

  imagecontainer: {
    position: 'absolute',
    right: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(16),
    backgroundColor: colors.white,
    elevation: 4,
  },

  texthead: {
    fontSize: textScale(18),
    lineHeight: textScale(18) * 1.4,
    letterSpacing: 0.2,
    fontFamily: 'Instrument-Sans',
    fontWeight: '700',
    color: colors.black,
  },

  text: {
    fontSize: textScale(18),
    lineHeight: textScale(18) * 1.4,
    letterSpacing: 0.2,
    fontFamily: 'Instrument-Sans',
    fontWeight: '700',
    color: colors.black,
  },

  mainimage: {
    height: verticalScale(181),
    width: moderateScale(361),
    marginTop: verticalScale(10),
  },

  button: {
    backgroundColor: colors.orange,
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(8),
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: textScale(16),
    fontWeight: '600',
  },
 
buttonContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderRadius: 48,
  backgroundColor: colors.white,
  elevation: 4,
  marginTop: 8,
  height: verticalScale(56),

  // ✅ border in React Native
  borderWidth: 1,
  borderColor: colors.black,
},

buttonTextis: {
  color: colors.black,
  fontSize: textScale(16),
  fontWeight: '600',
  
},
pastRecordContainer: {
  marginTop: 24,
},

pastRecordTitle: {
  fontSize: 16,
  fontWeight: '700',
  color: colors.black,
  marginBottom: 12,
},

recordItem: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: colors.white,
  paddingVertical: 14,
  paddingHorizontal: 16,
  borderRadius: 12,
  elevation: 2,
},

recordDate: {
  fontSize: 14,
  color: colors.black,
  fontWeight: '500',
},

recordTime: {
  fontSize: 14,
  color: colors.black,
  fontWeight: '600',
},


});

export default styles;
