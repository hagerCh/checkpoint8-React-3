import React, { Component } from 'react';
import Prog from "./Prog";
import Chiffres from './Chiffres';
import './style.css';

class Program extends Component{
    render(){
        return(
            <div className="program">
                <h1>NOS PROGRAMMES</h1> 
                <div className="row programme">
                    <Prog name="FULL TIME PROGRAM" description="Anim do eu aliqua pariatur do cupidatat tempor nulla amet. Et aute eu elit dolor labore eu ut commodo mollit est. Lorem duis irure mollit id cillum. Velit mollit sunt enim esse in laborum ullamco anim qui aliqua non consequat nulla quis. Tempor ex in do quis. Aute elit sunt elit sit laborum sunt duis." className="col-md-3" color="#2C373E"/>
                    <Prog name="PART TIME PROGRAM" description="Aliquip aliqua reprehenderit eu aliqua laboris magna ipsum nostrud officia. Sunt velit dolor eiusmod nisi in. Aliqua tempor pariatur et in officia aute amet proident nostrud est amet velit. Officia qui consectetur laborum ea magna irure sunt minim. Minim proident ad elit labore occaecat excepteur occaecat. 2" className="col-md-3" color="#F13F3F"/>
                    <Prog name="KIDS CODING PROGRAM" description="Incididunt sint consequat cupidatat eiusmod anim consequat id nulla cupidatat dolore qui in aliquip. Consectetur incididunt aute laborum nostrud tempor consequat culpa. Esse ut velit adipisicing tempor veniam minim labore cupidatat aliquip consequat. Laborum commodo molAute laborum incididunt qui in eiusmod occaecat exercitation commodo labore officia velit ipsum proident non. Dolore reprehenderit pariatur enim minim dolor anim qui enim laboris qui. 3" className="col-md-3" color="#7CB0D1"/>
                    <Prog name="SUMMER ACADEMY" description="Aliquip minim velit magna culpa veniam aliqua nostrud esse fugiat cillum dolore est pariatur. Adipisicing occaecat dolor qui officia. Velit ullamco do commodo labore veniam fugiat incididunt officia fugiat ad culpa. Qui nulla non dolor velit magna minim proident. Cupidatat tempor aute pariatur sit fugiat pariatur. 4" className="col-md-3" color="#14405C"/>
                </div> 
                <div className="numbers">
                    <h1>QUELQUES CHIFFRES</h1>
                    <br/>
                    <div className="row">
                    <Chiffres num="+20,000" description="Et aute doeserunt offici." className="col-md-2"/>
                    <Chiffres num="+500" description="Sunt id aliquip culpa ut dolor mollit." className="col-md-2"/>
                    <Chiffres num="+300" description="Sit aliquip esrpariatur non nisi." className="col-md-2"/>
                    <Chiffres num="+30" description="Tempor duis cillum inim." className="col-md-2"/>
                    <Chiffres num="+50" description="Sint dolor et elitor culpa ex." className="col-md-2"/>
                    <Chiffres num="400m²" description="Cillum culpa excepteur sint proident." className="col-md-2"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Program;