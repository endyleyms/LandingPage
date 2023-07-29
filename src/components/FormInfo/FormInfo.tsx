import Button from 'react-bootstrap/esm/Button';
import './FormInfo.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FormInfo = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !company && !country && !phone) {
      setError(`${t('form.required')}`);
      console.log('llega qui');
    } else {
      console.log('Se envia')
    }
    // regex to identify if the input has an email as text value
  };

  return (
    <div className='container-form'>
      <Form className='form' onSubmit={handleSubmit}>
        <div>
          <Form.Group className="mb-3">
            <Form.Label className='form-label'>{t('form.name')}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t('form.name')}
              className='input'
              value={name}
              onChange={(event) => setName(event.target.value)}
              isInvalid={!!error} />
            <Form.Control.Feedback type="invalid" style={{ display: 'flex', justifyContent: 'flex-start' }}>
              {error}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className='form-label'>{t('form.email')}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t('form.email')}
              className='input'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid" style={{ display: 'flex', justifyContent: 'flex-start' }}>
              {error}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className='form-label'>{t('form.company')}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t('form.company')}
              className='input'
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid" style={{ display: 'flex', justifyContent: 'flex-start' }}>
              {error}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div>
          <Form.Group className="mb-3">
            <Form.Label className='form-label'>{t('form.country')}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t('form.country')}
              className='input'
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid" style={{ display: 'flex', justifyContent: 'flex-start' }}>
              {error}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className='form-label'>{t('form.phone')}</Form.Label>
            <Form.Control
              type="number"
              placeholder={t('form.phone')}
              className='input'
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid" style={{ display: 'flex', justifyContent: 'flex-start' }}>
              {error}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='form-label'>{t('form.message')}</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="dark" type="submit" className='button' onClick={handleSubmit}>
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default FormInfo
