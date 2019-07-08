import React from 'react';
import { Button , Row, Col} from 'reactstrap';
import './definition.css'
import SingleDefinition from '../DefinitionCard/SingleDefinition';

const Definitions = ({ definitions }) => {
    return (
        <div>
            <Row>
                   <Col>  <h2 className ="h2"> DEFINITIONS </h2></Col>
                </Row>

				{definitions.map((definition, i)=>{
					return(
						

						<SingleDefinition
					key={definitions[i].id}
					word ={definitions[i].word}
					definition = {definitions[i].definition}
					
					/>
						)
					
				})};


            <Button className="take-quiz">TAKE A QUIZ</Button>
        </div>
    );
};

export default Definitions;
