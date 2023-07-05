import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-random-1: #e34d8c;
	--color-random-2: #c04277;
	--color-random-3: #7d2a4d;
	--color-random-4: #7000ff;
	--color-random-5: #6200e3;
	--color-random-6: #36007d;
	--color-random-7: #349974;
	--color-random-8: #2a7d5f;
	--color-random-9: #153d2e;
	--color-random-10: #6100ff;
	--color-random-11: #5700e3;
	--color-random-12: #30007d;
	--color-brand-1: #4529e6;
	--color-brand-2: #5126ea;
	--color-brand-3: #b0a6f0;
	--color-brand-4: #edeafd;
	--color-grey-0: #0b0d0d;
	--color-grey-1: #212529;
	--color-grey-2: #495057;
	--color-grey-3: #868e96;
	--color-grey-4: #adb5bd;
	--color-grey-5: #ced4da;
	--color-grey-6: #dee2e6;
	--color-grey-7: #e9ecef;
	--color-grey-8: #f1f3f5;
	--color-grey-9: #f8f9fa;
	--color-grey-10: #fdfdfd;
	--color-white: #ffffff;
  --color-alert-1: #cd2b31;
  --color-alert-2: #fdd8d8;
  --color-alert-3: #ffe5e5;
  --color-sucess-1: #18794e;
  --color-sucess-2: #ccebd7;
  --color-sucess-3: #ddf3e4;

  font-size: 60%;  
}
@media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;		
		
  }

  body,html{
    width: 100vw;
    min-height: 100vh;
  }

  body {
		margin: 0;
  	display: flex;
    background: var(--color-gray-10);
    color: var(--color-gray-2);
    -webkit-font-smoothing: antialiased;
  }
	header{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	main{
		max-width: 1400px;
		
	}

	body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

	h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.text-style-heading-heading-1-700 {
	font-size: 2.75rem;
	font-family: "Lexend";
	font-weight: 700;
	font-style: normal;
	line-height: 56px;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-2-600 {
	font-size: 2.25rem;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-3-500 {
	font-size: 2rem;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-3-600 {
	font-size: 2rem;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-4-600 {
	font-size: 1.75rem;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-4-500 {
	font-size: 1.75rem;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-5-500 {
	font-size: 1.5rem;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-5-600 {
	font-size: 1.5rem;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-6-500 {
	font-size: 1.25rem;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-6-600 {
	font-size: 1.25rem;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-7-500 {
	font-size: 1rem;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-heading-heading-7-600 {
	font-size: 1rem;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-inputs-buttons-input-label {
	font-size: 0.875rem;
	font-family: "Inter";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-inputs-buttons-input-placeholder {
	font-size: 1rem;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-inputs-buttons-button-big-text {
	font-size: 1rem;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}

.text-style-text-body-1-400 {
	font-size: 1rem;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}

.text-style-text-body-1-600 {
	font-size: 1rem;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}

.text-style-text-body-2-400 {
	font-size: 0.875rem;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}

.text-style-text-body-2-500 {
	font-size: 0.875rem;
	font-family: "Inter";
	font-weight: 500;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}`;
