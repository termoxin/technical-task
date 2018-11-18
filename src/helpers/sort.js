
export const sortLinks = (arr) => {
	let links = arr.social.slice()
	links.sort((link) => link.label !== 'web')
	return links
}