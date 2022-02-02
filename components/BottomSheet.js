
import { BottomSheet } from 'react-native-elements';
const BottomSheetComponent = ({content,close}) => {
  
  return (
      <BottomSheet modalProps={{}} isVisible={true}>
        {content}
      </BottomSheet>
    
  );
};


export default BottomSheetComponent;