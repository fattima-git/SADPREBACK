--
-- PostgreSQL database dump
--

-- Dumped from database version 13.7 (Debian 13.7-0+deb11u1)
-- Dumped by pg_dump version 13.7 (Debian 13.7-0+deb11u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: diagnostico_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.diagnostico_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.diagnostico_id_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: diagnosticos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.diagnosticos (
    id integer DEFAULT nextval('public.diagnostico_id_seq'::regclass) NOT NULL,
    diagnostico character varying NOT NULL
);


ALTER TABLE public.diagnosticos OWNER TO postgres;

--
-- Name: pacientes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pacientes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pacientes_id_seq OWNER TO postgres;

--
-- Name: pacientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pacientes (
    id integer DEFAULT nextval('public.pacientes_id_seq'::regclass) NOT NULL,
    nombres character varying NOT NULL,
    apellido character varying NOT NULL,
    sexo character varying NOT NULL,
    nro_documento integer NOT NULL,
    edad integer NOT NULL
);


ALTER TABLE public.pacientes OWNER TO postgres;

--
-- Name: registros_clinicos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.registros_clinicos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.registros_clinicos_id_seq OWNER TO postgres;

--
-- Name: registros_clinicos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.registros_clinicos (
    id integer DEFAULT nextval('public.registros_clinicos_id_seq'::regclass) NOT NULL,
    paciente integer,
    fecha date,
    sintomas integer[],
    diagnosticos integer[]
);


ALTER TABLE public.registros_clinicos OWNER TO postgres;

--
-- Name: sintomas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sintomas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sintomas_id_seq OWNER TO postgres;

--
-- Name: sintomas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sintomas (
    id integer DEFAULT nextval('public.sintomas_id_seq'::regclass) NOT NULL,
    nombre character varying NOT NULL
);


ALTER TABLE public.sintomas OWNER TO postgres;

--
-- Data for Name: diagnosticos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.diagnosticos (id, diagnostico) FROM stdin;
1	bronquitis
2	neumonia
3	covid
4	infeccion urinaria
5	gastroenteritis
6	intoxicación alimentaria
\.


--
-- Data for Name: pacientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pacientes (id, nombres, apellido, sexo, nro_documento, edad) FROM stdin;
1	Mara	Martinez	F	32111111	30
4	Fiorella	Perez	F	52555222	19
\.


--
-- Data for Name: registros_clinicos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.registros_clinicos (id, paciente, fecha, sintomas, diagnosticos) FROM stdin;
1	1	2022-10-28	{1,2,3}	{1,2,3}
5	1	2022-11-09	{1,2}	{1,2}
\.


--
-- Data for Name: sintomas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sintomas (id, nombre) FROM stdin;
1	tos
2	dolor en el pecho
3	dificultad para respirar
4	dolor o ardor al orinar
5	sangre en la orina
6	diarrea
7	dolor y calambres estomacales
\.


--
-- Name: diagnostico_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.diagnostico_id_seq', 6, true);


--
-- Name: pacientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pacientes_id_seq', 4, true);


--
-- Name: registros_clinicos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.registros_clinicos_id_seq', 5, true);


--
-- Name: sintomas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sintomas_id_seq', 6, true);


--
-- Name: diagnosticos diagnosticos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnosticos
    ADD CONSTRAINT diagnosticos_pkey PRIMARY KEY (id);


--
-- Name: pacientes paciente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT paciente_pkey PRIMARY KEY (id);


--
-- Name: registros_clinicos registro_clinico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registros_clinicos
    ADD CONSTRAINT registro_clinico_pkey PRIMARY KEY (id);


--
-- Name: sintomas sintomas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sintomas
    ADD CONSTRAINT sintomas_pkey PRIMARY KEY (id);


--
-- Name: registros_clinicos paciente; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registros_clinicos
    ADD CONSTRAINT paciente FOREIGN KEY (paciente) REFERENCES public.pacientes(id);


--
-- PostgreSQL database dump complete
--

