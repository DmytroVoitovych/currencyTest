

 export const funcSetOption = (e,setFrom,setTo) => {
       
        const id = e.target.id;

        if (e.target.selectedOptions) {

            const [{ value }] = [...e.target.selectedOptions];
            
            switch (id) {
                case 'from':
                    setFrom(value);
                    // setFocus('from');
                    break;
                case 'to':
                    setTo(value);
                    // setFocus('to');
                    break;
                default:
                    
                    break;
            }
        }
          
        return;
    };

 

