import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { getRecipes } from '../actions/recipeActions';
import uuid from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
  const dispatch = useDispatch();

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

  return (
    <div className=''>
      <Form onSubmit={handleSubmit} className='p-3'>
        <Form.Group>
          <Row className='mb-3'>
            <Col xs={12}>
              <div>
                <Form.Label className='text-center'>Search</Form.Label>
                <Form.Control
                  value={inputFields.search}
                  onChange={handleChange}
                  name='search'
                ></Form.Control>
              </div>
            </Col>
          </Row>
          {/* */}
          <Row className='my-3'>
            <Col xs={6} md={4}>
              <div>
                <Form.Label className='text-center'>Max Ingredients</Form.Label>
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
                <Form.Label className='text-center'>Max Calories</Form.Label>
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
                <Form.Label className='text-center'>
                  Max Time to Cook (Mins)
                </Form.Label>
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
              <Form.Label>Diet Type</Form.Label>
              <div className='custom-radio'>
                <Form.Check
                  type='radio'
                  inline
                  label='Balanced'
                  onChange={handleRadioBoxChange}
                  id='balanced'
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
              <Form.Label>Health Type</Form.Label>
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
              <Form.Label>Exclude Ingredients</Form.Label>
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
        </Form.Group>

        <Button variant='danger' onClick={handleReset} className='mr-3'>
          Clear Search
        </Button>
        <Button variant='success' type='submit'>
          Search
        </Button>
      </Form>
    </div>
  );
}
