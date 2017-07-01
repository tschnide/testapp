const React = require('react');

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

const LanguageItem = ({ lang, updateLanguage, selectedLanguage }) => (
  <li
  	style={lang === selectedLanguage ? { color: '#d0021b'}: null}
    onClick={updateLanguage }
 	>
    {lang}
  </li>
)

class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(synth, event) {
		const lang = synth.target.innerText 
		this.setState(function() {
			return {
				selectedLanguage: lang
			}	
		});
	}

	render() { 
		
		const { selectedLanguage } = this.state;

		return(
			<ul className='languages'>
				{languages.map(lang => (
					<LanguageItem
				    key={lang}
						lang={lang}
						updateLanguage={this.updateLanguage}
						selectedLanguage={selectedLanguage}
					/>
				))}
			</ul>
		)
	}
}

module.exports = Popular;