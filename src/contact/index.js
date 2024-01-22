import React, { useState } from 'react'
import Button from '../Components/button'
import { DivContact, DivInterest } from './styles'
import Title from '../Components/title'
import OptionInterest from '../Components/optioninterest'
import InputField from '../Components/inputfield'
import { api } from '../shared/api'

export default function Contact() {

    const arrayListInterests = [
        {
            value: 'Front-end',
            name: 'Front-end',
            selected: true
        },
        {
            value: 'Back-end',
            name: 'Back-end',
            selected: false
        },
        {
            value: 'Mobile',
            name: 'Mobile',
            selected: false
        },
        {
            value: 'AI',
            name: 'AI',
            selected: false
        },
        {
            value: 'Other',
            name: 'Other',
            selected: false
        }
    ];


    const [listInterests, setListInterests] = useState(arrayListInterests);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    async function saveContact(event) {
        event.preventDefault();

        //TODO: validar interest não selecionado
        let interest = listInterests.filter(varInterest => varInterest.selected)[0].value;

        let contact = {
            interest: interest,
            name: name,
            email: email,
            message: message
        }

        console.log(contact);

        await api
            .post("contact", { ...contact })
            .then((response) => {
                console.log(response.data.msg);
            })
            .catch((error) => {
                console.log(error);
            });

        clearForm();
    }


    function selectInterestOption(valueOpt) {
        setListInterests(listInterests.map(varInterest => {
            if (valueOpt === varInterest.value) {
                varInterest.selected = true;
            } else {
                varInterest.selected = false;
            }
            return varInterest;
        }));
    }

    function clearForm() {
        //FIXME: da para melhorar essa limpeza
        setListInterests(listInterests.map(varInterest => {
            if (varInterest.value === 'Front-end') {
                varInterest.selected = true;
            } else {
                varInterest.selected = false;
            }
            return varInterest;
        }));

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <form onSubmit={saveContact}>
            <DivContact>

                <Title textTitle="I’m interested in..." />
                <DivInterest>
                    {listInterests.map(interest =>
                        <OptionInterest key={interest.name} textOption={interest.name} selected={interest.selected} value={interest.value} onSelectInterestOption={selectInterestOption} />
                    )}
                </DivInterest>

                <InputField id="name" required={true} placeholder="Your name" value={name} onChangeValue={value => setName(value)} />
                <InputField id="email" required={true} placeholder="Your email" type="email" value={email} onChangeValue={value => setEmail(value)} />
                <InputField id="message" required={true} placeholder="Your message" value={message} onChangeValue={value => setMessage(value)} />

                <Button text="Send message" />

            </DivContact>
        </form>
    )
}