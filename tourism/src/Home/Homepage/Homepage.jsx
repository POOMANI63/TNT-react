import './Homepage.css'
import { Header } from '../../Header/Header'
import { Herocursel } from '../../Herocursol/Herocursel'
import { Footer } from '../../Footer/Footer';
import { Place } from '../../Place/Place';
import { Gallery } from '../Homegallery/Gallery';


export function Homepage(){
    return (
   
        <div>
           
            <Herocursel/>
            <Place/>
            <Gallery/>  
           
           
        </div>
    );
}


