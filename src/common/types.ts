export interface MySQLResponse {
	fieldCount?: number;
	affectedRows?: number;
	insertId?: number;
	serverStatus?: number;
	warningCount?: number;
	message?: string;
	protocol41?: boolean;
	changedRows?: number;
}

export interface Event {
    map: any;
	id?: number;
	description?: string;
	userid?: User['id'];
	petid?: Pet['id'];
	_created?: Date;
	owner_name?: User['owner_name'];
    pet_name?: Pet['pet_name'],
	time?: string,
	start_date?: string,
	end_date?: string,
	num_of_comments?: number,
	name?: Services['name'],
	pet_photo?: Pet['pet_photo']

}

export interface User {
	id?: number;
	owner_name?: string;
	email?: string;
	password?: string;
	address?: string;
	_created?: Date;
}

export interface Pet {
    map: any;
	id?: number;
	pet_name?: string;
	pet_breed?: string;
	pet_photo?: string;
	pet_age?: number;
	
}

export interface Services {
	name?: string;
	id?: number;
}

export interface Comments {
	id?: number,
	eventid?: number,
	userid?: number,
	content?: string,
	_created?: Date,
}


export interface IPayload {
	userid?: number,
	email?: string,
}

export interface ProfileInfo {
	id?: number,
	owner_name?: string,
	email?: string,
	_created?: Date
}

export interface ProfileEvents {
	id?: number,
	description?: string,
    name?: Services['name']
	userid?: number,
	_created?: Date,
	time?: string,
	start_date?: string,
	end_date?: string,
	pet_name?: Pet['pet_name'],
	owner_name?: User['owner_name'],
	num_of_comments?: number}
