import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6FB',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },

  infoCard: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 24,
  },

  infoText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.black,
  },

  timerContainer: {
    marginTop: 48,
    alignItems: 'center',
  },

  timerText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FF5A5A',
  },

  stopButton: {
    marginTop: 32,
    alignSelf: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },

  stopIcon: {
    width: 20,
    height: 20,
    backgroundColor: colors.black,
    borderRadius: 4,
  },

  saveButton: {
    marginTop: 40,
    backgroundColor: colors.white,
    borderRadius: 32,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
  },

  saveText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },

  footerText: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 14,
    color: colors.black,
  },

  footerUnderline: {
    textDecorationLine: 'underline',
  },

  tapArea: {
    ...StyleSheet.absoluteFillObject,
  },

  /* MODAL STYLES */

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },

  modalContainer: {
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: '80%',
  },

  closeButton: {
    alignSelf: 'flex-end',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 12,
  },

  stepItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  stepIndex: {
    fontWeight: '700',
    marginRight: 8,
    color: colors.black,
  },

  stepText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default styles;
