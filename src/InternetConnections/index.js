import * as React from 'react';
import {
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    Flex,
    Button,
    Text,
    Card,
} from '@aws-amplify/ui-react';
import Input from '../components/Input/CustomInput';
import Select from '../components/Select/CustomSelect';
import CustomImage from '../components/Image/Image';
import check from '../assets/check.png';
import close from '../assets/close.png';
import { validateIp } from '../helper.js';
import { INTERET_CONNECTIONS_CONST } from './constants';
import { SwitchFieldLabelPositionExample } from './SwithToggle';
import './style.css';

const InternetConnections = () => {

    const [connectionRows, updateConnectionRows] = React.useState(1);
    const [value, setValue] = React.useState('');
    const [ipError, validateIpAddress] = React.useState(false);
    const [usernameError, validateUsername] = React.useState(false);
    const [passwordError, validatePassword] = React.useState(false);
    const typeOptions = ["Proxy", "OpenVPN"];
    const costPerReqOptions = ["$$$$$", "$$$$", "$$$", "$$", "$"];

    function onChange(e, value, name) {
        switch (name) {
            case 'ip':
                validateIp(value) ? validateIpAddress(false) : validateIpAddress(true);
                break;
            case 'username':
                value === "" ? validateUsername(true) : validateUsername(false);
                break;
            case 'password':
                value === "" ? validatePassword(true) : validatePassword(false);
                break;
            default:
                break;
        }
    };
    return (
        <>
            <Flex direction="column" className='internet-connection-wrapper'>
                <Table className='table-row'>
                    <TableHead>
                        <TableRow>
                            {Object.values(INTERET_CONNECTIONS_CONST).map((theader, index) => {
                                return (<TableCell as="th">{theader}</TableCell>);
                            })}
                        </TableRow>
                    </TableHead>
                    {[...Array(connectionRows)].map((e, i) => (
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Input
                                        inputMode='text'
                                        placeholder='Label'
                                        name='Label'
                                        className={`labelinput-class`}
                                    />
                                </TableCell>
                                <TableCell><Select
                                    className={`selecttype-class`}
                                    options={typeOptions}
                                    selected={1}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                /></TableCell>
                                <TableCell><Select
                                    options={costPerReqOptions}
                                    selected={2}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                /></TableCell>
                                <TableCell><Input
                                    inputMode='text'
                                    placeholder='IP'
                                    className={`ipinput-class`}
                                    name='ip'
                                    hasError={ipError}
                                    errorMessage="Please enter a valid ip address"
                                    onChange={onChange}
                                /></TableCell>
                                <TableCell><Input
                                    inputMode='text'
                                    placeholder='Zone'
                                    name='Zone'
                                    className={`zoneinput-class`}
                                /></TableCell>
                                <TableCell><Input
                                    inputMode='text'
                                    placeholder='Username'
                                    name='username'
                                    className={`usernameinput-class`}
                                    hasError={usernameError}
                                    errorMessage="Please enter username"
                                    onChange={onChange}
                                /></TableCell>

                                <TableCell><Input
                                    inputMode='password'
                                    placeholder='Password'
                                    name='password'
                                    className={`usernameinput-class`}
                                    hasError={passwordError}
                                    errorMessage="Please enter password"
                                    onChange={onChange}
                                /></TableCell>
                                <TableCell><Button size="small">Test</Button></TableCell>
                                <TableCell><CustomImage
                                    width={`60%`}
                                    src={check}
                                /></TableCell>
                                <TableCell><Text variation="primary">2d</Text></TableCell>
                                <TableCell><Text className={`request-class`} variation="primary">1223.0mb 1222</Text></TableCell>
                                <TableCell><SwitchFieldLabelPositionExample /></TableCell>
                                <TableCell><Button onClick={(e) => updateConnectionRows(connectionRows - 1)} size="small">Del</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    ))}
                </Table>
            </Flex>
            <Flex><Button className='footer-buttons' onClick={(e) => updateConnectionRows(connectionRows + 1)} size="small">Add</Button>
                <Button className='footer-buttons' size="small">Test all as shown</Button>
                <Button className='footer-buttons' size="small">Save</Button></Flex>
        </>
    )
};

export default InternetConnections;