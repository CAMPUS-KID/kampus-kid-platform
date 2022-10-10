INSERT INTO "AccountTypes"
    (name, "isActive", "createdAt", "updatedAt")
VALUES
    ('admin', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('company', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('company user', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "Languages"
    (name, code, "isActive", "createdAt", "updatedAt")
VALUES
    ('Español colombia', 'ES-CO', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "Currencies"
    (name, code, "decimalCount", "isActive", "createdAt", "updatedAt")
VALUES
    ('PESO COLOMBIANO', 'COP', 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('DÓLAR ESTADOUNIDENSE', 'USD', 2, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "Countries"
    (language, currency, name, code, "phonePrefix", "isActive", "createdAt", "updatedAt")
VALUES
    (1, 1, 'Colombia', 'CO', '+57', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "Questions"
    (name, description, example, "defaultMaxLength", "defaultTimeout", "isMandatory", "isActive", "createdAt", "updatedAt")
VALUES
    ('Saludio inicial y nombre', 
    '', 
    '“¡Hola! te llamamos de <nombre de tu empresa>, vimos que estás interesado en <nombre de tu producto o servicio>“. Cuentame ¿Cuál es tu Nombre?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Edad', 
    '', 
    'Super ¿Cuántos años tienes?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Ciudad', 
    '', 
    'Genial ¿En que ciudad te encuentras?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('# Documento', 
    '', 
    '¿Me recuerdas tu Documento Identidad?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Ingresos', 
    '', 
    '¿Actualmente cual es tu nivel de ingresos?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Auto de preferrencia', 
    '', 
    '¿Tienes algun auto de preferencia?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Dirección', 
    '', 
    '¿En que dirección vives actualmente?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Ocupación', 
    '', 
    '¿Actualmente es que estas trabajando?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('¿Qué quieres estudiar?', 
    '', 
    '¿Qué carrera estás buscando?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Nivel de estudios', 
    '', 
    '¿Cuál es tu nivel de estudios?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('# Hijos', 
    '', 
    '¿Cuántos hijos tienes actualmente?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('¿Qué buscas?', 
    '', 
    '¿Cuéntanos en qué tienes interés?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Fecha de nacimiento', 
    '', 
    'Genial ¿Cual es tu Fecha de Nacimiento?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('¿Dónde trabajas?', 
    '', 
    '¿En que empresa trabajas?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('¿Te interesan nuestros servicios?', 
    '', 
    '¿Te interesan nuestros servicios?', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Gracias', 
    '', 
    'Muchas gracias por tu tiempo, me gusto charlar contigo, pronto un asesor te brindara toda la información que necesitas, cuidate mucho.', 
    5,
    3,
    true,
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "SubscriptionPlanTypes"
    (name, "isActive", "createdAt", "updatedAt")
VALUES
    ('mensual', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('anual', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "TransactionStatuses"
    (name, "isActive", "createdAt", "updatedAt")
VALUES
    ('pending', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('accepted', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('declined', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "VoiceTypes"
    (name, "isActive", "createdAt", "updatedAt")
VALUES
    ('anciano', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('anciana', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('hombre mayor', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('mujer mayor', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('hombre joven', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('mujer joven', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('niña', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('niño', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;

INSERT INTO "CompanyTypes"
    (name, "isActive", "createdAt", "updatedAt")
VALUES
    ('diamond', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('silver', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('gold', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "PostSectionTypes"
    (name, "isActive", "createdAt", "updatedAt")
VALUES
    ('text', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('image', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('video', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('link', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "PaymentMethods"
    (name, "isActive", "createdAt", "updatedAt")
VALUES
    ('pse', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('credit card', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('debit card', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cupon', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cash', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('third party', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('coins', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "TransactionTypes"
    (name, "isActive", "createdAt", "updatedAt")
VALUES
    ('recharge', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('plan acquisition', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('consume', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('withdraw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "SubscriptionPlans"
    (type, currency, name, "coinsIncluded", "coinValue",  "value", "ABTestingIdentifier", "rules",  "isActive", "createdAt", "updatedAt")
VALUES
    (1, 1, 'FREETRIEAL', 50, 400, 0, 0, '{}', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;

INSERT INTO "Companies"
    ("type", currency, "subscriptionPlan", "name", "phone", "companyName", "balance", "ABTestingIdentifier", "subscriptionRules", "isActive", "createdAt", "updatedAt")
VALUES
    (3,
    1,
    1,
    'Test User',
    '1234567890',
    'Test Company',
    50,
    0,
    '{}',
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "Accounts"
    ("type", "company", "email", "salt", "encryptedPassword", "additionalData", "verificationCode", "isActive", "createdAt", "updatedAt")
VALUES
    (2, 
    1,
    'a@test.com', 
    '4afe0c2dce06b1fbb7fd53adf8da75d4591003c502ccfcb3e8bf5b294d597bcc866745ae6ae8aadb1e43b5c8e912fb80e96b', --123456
    'dfa93554277fc0a59de565c3e9fd05a416ca263a6f382dd4614f9f5958d8314c', 
    '{}',
    '123456',
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
----------------------------------------------------------------------------
----------------------------------------------------------------------------
INSERT INTO "VoiceFormFieldTypes"
    (name, "isActive", "createdAt", "updatedAt")
VALUES
    ('thanks', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('introduction', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('question', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "VoiceForms" 
	(company, country, name, description, rules, "allowDuplicates", "isActive", "createdAt", "updatedAt")
VALUES
	(1, 1, 'test', 'test', '{}', true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "VoiceFormFields" 
	("voiceForm", "type", "question", "name", "description", "order", "rules", "isActive", "createdAt", "updatedAt")
VALUES
	(1, 3, 1, 'name', 'name', 0, '{"audioUrl": "https://firebasestorage.googleapis.com/v0/b/talkeva-test.appspot.com/o/eva%2Faudibles%2F1.mp3?alt=media", "timeout": 3, "finishOnKey": "#", "maxLength": 5}', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(1, 3, 3, 'ciudad', 'ciudad', 0, '{"audioUrl": "https://firebasestorage.googleapis.com/v0/b/talkeva-test.appspot.com/o/eva%2Faudibles%2F2.mp3?alt=media", "timeout": 3, "finishOnKey": "#", "maxLength": 5}', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(1, 3, 15, 'empresa',  'empresa', 0, '{"audioUrl": "https://firebasestorage.googleapis.com/v0/b/talkeva-test.appspot.com/o/eva%2Faudibles%2F3.mp3?alt=media", "timeout": 3, "finishOnKey": "#", "maxLength": 6}', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(1, 3, 14, 'interesado', 'interesado', 0, '{"audioUrl": "https://firebasestorage.googleapis.com/v0/b/talkeva-test.appspot.com/o/eva%2Faudibles%2F5.mp3?alt=media", "timeout": 3, "finishOnKey": "#", "maxLength": 6}', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(1, 1, 16, 'gracias', 'gracias', 0, '{"audioUrl": "https://firebasestorage.googleapis.com/v0/b/talkeva-test.appspot.com/o/eva%2Faudibles%2F6.mp3?alt=media"}', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
INSERT INTO "PromotionalCodes"
    (code, name, description, rules, "isActive", "createdAt", "updatedAt")
VALUES
    ('IMKNEW','IMK', '', '{}', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
/*============================================*/
INSERT INTO "Accounts"
    ("type", "email", "salt", "encryptedPassword", "additionalData", "verificationCode", "isActive", "createdAt", "updatedAt")
VALUES
    (1, 
    'admin@talkeva.com', 
    '4afe0c2dce06b1fbb7fd53adf8da75d4591003c502ccfcb3e8bf5b294d597bcc866745ae6ae8aadb1e43b5c8e912fb80e96b', --123456
    'dfa93554277fc0a59de565c3e9fd05a416ca263a6f382dd4614f9f5958d8314c', 
    '{}',
    '123456',
    true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
;
