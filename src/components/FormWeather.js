import React from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';

class FormWeather extends React.Component {
    render() {
        return (
            <div>
                <Form className={'input-weather-form'} inline onSubmit={this.props.getWeather}>
                    <FormGroup>
                        <Input type="text" name="city" placeholder="City.."/>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Input type="text" name="country" placeholder="Country..."/>
                    </FormGroup>
                    {' '}
                    <Button className={'form-button'} color="success">Get Weather</Button>
                </Form>
            </div>
        );
    }

}

export default FormWeather;
