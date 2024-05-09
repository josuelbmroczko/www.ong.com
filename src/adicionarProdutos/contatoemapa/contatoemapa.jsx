import React from 'react';
import { Mapastyle } from './style';
import { Link } from 'react-router-dom';

import { data } from './../dataTextos';

export default function ContatoEMapa() {
    return (
        <Mapastyle>
              <h2>Entre em contato para marcar uma visita </h2>
            <p>Estamos ansiosos para recebelo</p>

            <div className="mapa">
                <iframe title="Localização da ONG"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9515652769246!2d-46.4669889!3d-23.534244400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66ce407895cd%3A0x74b4532fef04b179!2sAv.%20das%20Alamandas%2C%20190%20-%20Cidade%20Ant%C3%B4nio%20Est%C3%AAv%C3%A3o%20de%20Carvalho%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008225-310!5e0!3m2!1spt-BR!2sbr!4v1715098937422!5m2!1spt-BR!2sbr" ></iframe>
            </div>
        </Mapastyle>
    );
}
