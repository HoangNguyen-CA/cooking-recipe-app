import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function SearchBar() {
  const [inputFields, setInputFields] = useState({
    name: '',
    ingredients: '',
    calories: '',
    diet: '',
    health: [], // CHECK
    time: '',
    excluded: ''
  });

  const [excludedArray, setExcludedArray] = useState(['Default']);

  const [checkFields, setCheckFields] = useState({
    balanced: false,
    high_protein: false,
    low_carb: false,
    low_fat: false,
    vegan: false,
    vegetarian: false,
    sugar_conscious: false,
    peanut_free: false,
    tree_nut_free: false,
    alcohol_free: false
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputFields({
      ...inputFields,
      [name]: value
    });
  };

  const handleCheckBoxChange = e => {
    const name = e.target.name;
    const checked = e.target.checked;
    setCheckFields({
      ...checkFields,
      [name]: checked
    });
    console.log(checkFields);
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
      balanced: false,
      high_protein: false,
      low_carb: false,
      low_fat: false,
      vegan: false,
      vegetarian: false,
      sugar_conscious: false,
      peanut_free: false,
      tree_nut_free: false,
      alcohol_free: false
    });
  };

  const handleExclude = () => {
    setExcludedArray([...excludedArray, inputFields.excluded]);
    setInputFields({ ...inputFields, excluded: '' });
  };

  return (
    <div className=''>
      <Form onSubmit={handleSubmit} className='p-5'>
        <Form.Group>
          <Row>
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
          <Row>
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
          <Row>
            <Col xs={6}>
              <Form.Label>Diet Type</Form.Label>
              <div>
                <Form.Check
                  type='checkbox'
                  inline
                  label='Balanced'
                  onChange={handleCheckBoxChange}
                  name='balanced'
                  checked={checkFields.balanced}
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='High-Protein'
                  inline
                  onChange={handleCheckBoxChange}
                  name='high_protein'
                  checked={checkFields.high_protein}
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Low-Carb'
                  inline
                  onChange={handleCheckBoxChange}
                  name='low_carb'
                  checked={checkFields.low_carb}
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Low-Fat'
                  inline
                  onChange={handleCheckBoxChange}
                  name='low_fat'
                  checked={checkFields.low_fat}
                ></Form.Check>
              </div>
            </Col>
            {/* */}
            <Col xs={6}>
              <Form.Label>Health Type</Form.Label>
              <div>
                <Form.Check
                  type='checkbox'
                  inline
                  label='Vegan'
                  onChange={handleCheckBoxChange}
                  name='vegan'
                  checked={checkFields.vegan}
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Vegetarian'
                  inline
                  onChange={handleCheckBoxChange}
                  name='vegetarian'
                  checked={checkFields.vegetarian}
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Sugar-Conscious'
                  inline
                  onChange={handleCheckBoxChange}
                  name='sugar_conscious'
                  checked={checkFields.sugar_conscious}
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Peanut-Free'
                  inline
                  onChange={handleCheckBoxChange}
                  name='peanut_free'
                  checked={checkFields.peanut_free}
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Tree-Nut-Free'
                  inline
                  onChange={handleCheckBoxChange}
                  name='tree_nut_free'
                  checked={checkFields.tree_nut_free}
                ></Form.Check>
                <Form.Check
                  type='checkbox'
                  label='Alcohol-Free'
                  inline
                  onChange={handleCheckBoxChange}
                  name='alcohol_free'
                  checked={checkFields.alcohol_free}
                ></Form.Check>
              </div>
            </Col>
          </Row>
          <Row className='border border-black p-3'>
            <Col xs={4}>
              <Form.Label>Exclude Ingredients</Form.Label>
              <div>
                <Form.Control
                  value={inputFields.excluded}
                  onChange={handleChange}
                  name='excluded'
                ></Form.Control>
                <Button onClick={handleExclude}>Exclude</Button>
              </div>
            </Col>
            <Col xs={8}>
              <div className='w-100 h-100 bg-light'>
                <ul>
                  {excludedArray.map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Search
        </Button>
        <Button variant='primary' onClick={handleReset}>
          Clear Search
        </Button>
      </Form>
    </div>
  );
}
