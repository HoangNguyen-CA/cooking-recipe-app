import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { getRecipes } from '../actions/recipeActions';
import uuid from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.2rem;
`;
const Badge = styled.div`
  position: inline;
  margin-top: 1rem;
`;

export default function SearchBar() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const AdvancedSearch = styled.div`
    display: ${visible ? 'block' : 'none'};
  `;

  const [inputFields, setInputFields] = useState({
    search: '',
    ingredients: '',
    calories: '',
    diet: '',
    time: ''
  });

  const [checkFields, setCheckFields] = useState({
    vegan: false,
    vegetarian: false,
    'sugar-conscious': false,
    'peanut-free': false,
    'tree-nut-free': false,
    'alcohol-free': false
  });

  const [radioField, setRadioField] = useState('');

  const [excludedArray, setExcludedArray] = useState([]);
  const [excludedField, setExcludedField] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const health = [];

    for (const key in checkFields) {
      if (checkFields[key] === true) {
        health.push(key);
      }
    }

    const request = {
      ...inputFields,
      excluded: excludedArray,
      diet: radioField,
      health
    };
    dispatch(getRecipes(request));
    setVisible(false);
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputFields({
      ...inputFields,
      [name]: value
    });
  };

  const handleExcludedChange = e => {
    if (e.target.value.length <= 20) {
      setExcludedField(e.target.value);
    }
  };

  const handleReset = () => {
    setInputFields({
      search: '',
      ingredients: '',
      calories: '',
      diet: '',
      health: [],
      time: ''
    });
    setCheckFields({
      vegan: false,
      vegetarian: false,
      'sugar-conscious': false,
      'peanut-free': false,
      'tree-nut-free': false,
      'alcohol-free': false
    });
    setRadioField('');
    setExcludedArray([]);
    setExcludedField('');
  };

  const handleCheckBoxChange = e => {
    const id = e.target.id;
    const checked = e.target.checked;
    setCheckFields({
      ...checkFields,
      [id]: checked
    });
  };

  const handleRadioBoxChange = e => {
    setRadioField(e.target.id);
  };

  const handleExclude = () => {
    if (excludedField !== '' && !excludedArray.includes(excludedField)) {
      setExcludedArray([...excludedArray, excludedField]);
    }
    setExcludedField('');
  };

  const error = useSelector(state => state.error);

  useEffect(() => {
    if (error.id === 'GET_RECIPES_FAIL') {
      setMessage(error.msg.msg);
    } else {
      setMessage('');
    }
  }, [error]);

  return (
    <div className=''>
      <Form
        onSubmit={handleSubmit}
        className='m-3'
        style={{ position: 'relative' }}
      >
        {message ? <Alert variant='danger'>{message}</Alert> : ''}

        <Form.Group>
          <Row className='mb-3'>
            <Col xs={12}>
              <div>
                <Label>Search</Label>
                <Form.Control
                  value={inputFields.search}
                  onChange={handleChange}
                  name='search'
                ></Form.Control>
              </div>
            </Col>
          </Row>
          <AdvancedSearch>
            {/* */}
            <Row className='my-3'>
              <Col xs={6} md={4}>
                <div>
                  <Label>Max Ingredients</Label>
                  <Form.Control
                    type='number'
                    value={inputFields.ingredients}
                    onChange={handleChange}
                    name='ingredients'
                    min='1'
                  ></Form.Control>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div>
                  <Label>Max Calories</Label>
                  <Form.Control
                    type='number'
                    value={inputFields.calories}
                    onChange={handleChange}
                    name='calories'
                    min='1'
                  ></Form.Control>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div>
                  <Label>Max Time to Cook (Mins)</Label>
                  <Form.Control
                    type='number'
                    value={inputFields.time}
                    onChange={handleChange}
                    name='time'
                    min='1'
                  ></Form.Control>
                </div>
              </Col>
            </Row>
            {/* */}
            <Row className='my-3'>
              <Col xs={6}>
                <Label>Diet Type</Label>
                <div className='custom-radio'>
                  <Form.Check
                    type='radio'
                    inline
                    onChange={handleRadioBoxChange}
                    id='balanced'
                    label='Balanced'
                    checked={radioField === 'balanced'}
                    custom
                  ></Form.Check>
                  <Form.Check
                    type='radio'
                    label='High-Protein'
                    inline
                    onChange={handleRadioBoxChange}
                    id='high-protein'
                    checked={radioField === 'high-protein'}
                    custom
                  ></Form.Check>
                  <Form.Check
                    type='radio'
                    label='Low-Carb'
                    inline
                    onChange={handleRadioBoxChange}
                    id='low-carb'
                    checked={radioField === 'low-carb'}
                    custom
                  ></Form.Check>
                  <Form.Check
                    type='radio'
                    label='Low-Fat'
                    inline
                    onChange={handleRadioBoxChange}
                    id='low-fat'
                    checked={radioField === 'low-fat'}
                    custom
                  ></Form.Check>
                </div>
              </Col>
              {/* */}
              <Col xs={6}>
                <Label>Health Type</Label>
                <div className='custom-checkbox'>
                  <Form.Check
                    type='checkbox'
                    inline
                    label='Vegan'
                    onChange={handleCheckBoxChange}
                    id='vegan'
                    checked={checkFields.vegan}
                    custom
                  ></Form.Check>
                  <Form.Check
                    type='checkbox'
                    label='Vegetarian'
                    inline
                    onChange={handleCheckBoxChange}
                    id='vegetarian'
                    checked={checkFields.vegetarian}
                    custom
                  ></Form.Check>
                  <Form.Check
                    type='checkbox'
                    label='Sugar-Conscious'
                    inline
                    onChange={handleCheckBoxChange}
                    id='sugar-conscious'
                    checked={checkFields['sugar-conscious']}
                    custom
                  ></Form.Check>
                  <Form.Check
                    type='checkbox'
                    label='Peanut-Free'
                    inline
                    onChange={handleCheckBoxChange}
                    id='peanut-free'
                    checked={checkFields['peanut-free']}
                    custom
                  ></Form.Check>
                  <Form.Check
                    type='checkbox'
                    label='Tree-Nut-Free'
                    inline
                    onChange={handleCheckBoxChange}
                    id='tree-nut-free'
                    checked={checkFields['tree-nut-free']}
                    custom
                  ></Form.Check>
                  <Form.Check
                    type='checkbox'
                    label='Alcohol-Free'
                    inline
                    onChange={handleCheckBoxChange}
                    id='alcohol-free'
                    checked={checkFields['alcohol-free']}
                    custom
                  ></Form.Check>
                </div>
              </Col>
            </Row>
            <Row className='border border-black p-3 mx-0 my-3'>
              <Col xs={4}>
                <Label>Exclude Ingredients</Label>
                <div>
                  <Form.Control
                    value={excludedField}
                    onChange={handleExcludedChange}
                    name='excluded'
                  ></Form.Control>
                  <Button onClick={handleExclude} className='mt-3'>
                    Exclude
                  </Button>
                </div>
              </Col>
              <Col xs={8} className='p-3 m-0 bg-light'>
                {excludedArray.map(exclude => (
                  <Button
                    key={uuid()}
                    className='text-light m-2'
                    variant='danger'
                    onClick={() => {
                      setExcludedArray(
                        excludedArray.filter(temp => temp !== exclude)
                      );
                    }}
                  >
                    {exclude}
                  </Button>
                ))}
              </Col>
            </Row>
          </AdvancedSearch>
        </Form.Group>

        {visible ? (
          <Button
            onClick={() => {
              setVisible(false);
            }}
            variant='secondary'
          >
            Hide Search
          </Button>
        ) : (
          <Button
            onClick={() => {
              setVisible(true);
            }}
            variant='secondary'
          >
            Advanced Search
          </Button>
        )}

        <Button variant='danger' onClick={handleReset} className='ml-3'>
          Clear Search
        </Button>

        <Button
          variant='success'
          type='submit'
          style={{ position: 'absolute', right: '0' }}
        >
          Search
        </Button>
        <Badge id='edamam-badge' data-color='transparent'></Badge>
      </Form>
    </div>
  );
}
