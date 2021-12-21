// Main hosting
const url_go = 'https://huan-sa-hsu-microser-golang.herokuapp.com';
const url_python = 'https://huan-sa-hsu-microser-python.herokuapp.com';

// Url Golang exported 
export const read_all_games = url_go + '/';
export const create_new_game = url_go + '/create-game';
export const read_details_game = url_go + '/read-details/';
export const edit_game = url_go + '/update-game/';
export const delete_game = url_go + '/delete-game/';
export const search_game = url_go + '/search_game/';

// Url Python exported
export const login = url_python + '/login';
export const register = url_python + '/register';

// Temporary to avoid bug
export const config = 'temp';