import react from 'react';
import { ImSpinner2 } from 'react-icons/im'
export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <ImSpinner2 className="animate-spin w-12 h-12" />
        </div>
    )
    
}