import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import uuid from 'uuid';

export default function SearchBar() {
  const [inputFields, setInputFields] = useState({
    name: '',
    ingredients: '',
    calories: '',
    diet: '',
    time: '',
    excluded: ''
  });

  const [checkFields, setCheckFields] = useState({
    vegan: false,
    vegetarian: false,
    sugar_conscious: false,
    peanut_free: false,
    tree_nut_free: false,
    alcohol_free: false
  });

  const [radioField, setRadioFields] = useState('');

  const [excludedArray, setExcludedArray] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const request = {
      ...checkFields,
      ...inputFields,
      excluded: excludedArray,
      diet: radioField
    };
    console.log(request);
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputFields({
      ...inputFields,
      [name]: value
    });
  };

  const handleReset = () => {
    setInputFields({
      name: '',
      ingredients: '',
      calories: '',
      diet: '',
      health: [],
      time: '',
      excluded: ''
    });
    setCheckFields({
      vegan: false,
      vegetarian: false,
      sugar_conscious: false,
      peanut_free: false,
      tree_nut_free: false,
      alcohol_free: false
    });
    setRadioFields({
      balanced: false,
      high_protein: false,
      low_carb: false,
      low_fat: false
    });
    setExcludedArray([]);
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
    setRadioFields(e.target.id);
  };

  const handleExclude = () => {
    if (
      inputFields.excluded != '' &&
      !excludedArray.includes(inputFields.excluded)
    ) {
      setExcludedArray([...excludedArray, inputFields.excluded]);
    }
    setInputFields({ ...inputFields, excluded: '' });
  };

  return (
    <div className=''>
      <Form onSubmit={handleSubmit} className='p-3'>
        <Form.Group>
          <Row className='mb-3'>
            <Col xs={12}>
              <div>
                <Form.Label className='text-center'>Name</Form.Label>
                <Form.Control
                  value={inputFields.name}
                  onChange={handleChange}
                  name='name'
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
                  id='high_protein'
                  checked={radioField === 'high_protein'}
                  custom
                ></Form.Check>
                <Form.Check
                  type='radio'
                  label='Low-Carb'
                  inline
                  onChange={handleRadioBoxChange}
                  id='low_carb'
                  checked={radioField === 'low_carb'}
                  custom
                ></Form.Check>
                <Form.Check
                  type='radio'
                  label='Low-Fat'
                  inline
                  onChange={handleRadioBoxChange}
                  id='low_fat'
                  checked={radioField === 'low_fat'}
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
                  id='sugar_conscious'
                  checked={checkFields.sugar_conscious}
                  custom
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Peanut-Free'
                  inline
                  onChange={handleCheckBoxChange}
                  id='peanut_free'
                  checked={checkFields.peanut_free}
                  custom
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Tree-Nut-Free'
                  inline
                  onChange={handleCheckBoxChange}
                  id='tree_nut_free'
                  checked={checkFields.tree_nut_free}
                  custom
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Alcohol-Free'
                  inline
                  onChange={handleCheckBoxChange}
                  id='alcohol_free'
                  checked={checkFields.alcohol_free}
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
                  value={inputFields.excluded}
                  onChange={handleChange}
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
        <Button variant='primary' type='submit'>
          Search
        </Button>
      </Form>
    </div>
  );
}
