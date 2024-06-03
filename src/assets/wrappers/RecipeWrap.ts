import styled from 'styled-components';

export const RecipeWrapper = styled.div`
    header {
        display: flex;
        justify-content: center;

        flex-direction: column;
    }
    header > h1 {
        font-size: 48px;
        letter-spacing: 0.4dvw;
    }
    .header--img {
        margin: 2rem 0;
        display: flex;
        justify-content: center;
    }
    .header--img__dish {
        width: 85%;
        border-radius: 1rem;
        box-shadow: var(--shadow-3);
        object-fit: cover;
    }

    .header--img:hover {
        opacity: 0.9;
    }

    .metric-container {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
    }
    .metric-options {
        display: flex;
        justify-content: end;
        align-items: center;
        p {
            margin: 0.2rem;
        }
    }

    .ingredients-container,
    .equipment-container,
    .instruction-container {
        margin: 2rem 0;
        h2 {
            margin-bottom: 1.5rem;
        }
    }
    .items-equipment {
        margin: 1rem 0;
        text-transform: capitalize;
        font-family: 'Roboto', sans-serif;
    }

    .items-ingredient {
        margin: 0.8rem 0;
        font-family: 'Roboto', sans-serif;
        padding: 0.4rem;
        text-transform: capitalize;
    }

    .instructions-steps {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        padding: 1rem 0;
        line-height: 2.5rem;
    }
    .instructions-steps > span {
        font-weight: 800;
    }

    .info-container,
    .nutrition-content {
        position: relative;
        margin-top: 1.5rem;
        background-color: rgb(255, 255, 255);
        border-width: 1px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.3);
        border-image: initial;
        border-radius: 0.3125rem;
        padding: 1.75rem 1.5rem 1.5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }

    .info-container::before,
    .nutrition-content::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: -0.0625rem;
        left: -0.0625rem;
        width: calc(100% + 0.125rem);
        border-top: 12px solid var(--primary-400);
        border-radius: 4px 4px 0px 0px;
    }

    .info-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .info-items p {
        text-transform: capitalize;
        font-size: 18px;
    }

    .nutrition-items {
        text-align: center;
    }

    .nutrition-items > p {
        margin: 0.8rem 0 0 0;
    }

    .nutrients-container {
        margin: 0.8rem 0;
    }
    .nutrients-container > h3 {
        margin: 2rem 0;
    }

    table {
        font-family: 'Roboto', sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    table td,
    table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    table tr:nth-child(even) {
        background-color: var(--primary-100);
    }
    table tr:hover {
        background-color: #ddd;
    }

    table th {
        padding: 0.4rem;
        text-align: left;
        background-color: var(--primary-400);
        color: var(--primary-50);
    }

    .btn-container {
        display: flex;
        justify-content: center;
        margin: 2.5rem 0;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #2196f3;
    }

    input:checked + .slider:before {
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;
