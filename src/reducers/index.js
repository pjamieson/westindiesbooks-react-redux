import { combineReducers } from 'redux';
import AuthorsReducer from './reducer_authors';
import ArtLinksReducer from './reducer_art_links';

const rootReducer = combineReducers({
	authors: AuthorsReducer,
	art_links: ArtLinksReducer
});

export default rootReducer;
