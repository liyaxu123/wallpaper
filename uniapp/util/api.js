const BASEURL = 'http://localhost:8000';
module.exports = {
	BASEURL,
	uploadImg: BASEURL + "/wallpaper/upload",
	creatTag: BASEURL + "/wallpaper/creatTag",
	getTagList: BASEURL + "/wallpaper/getTagList?limit=99999&offset=0",
	wallpaperAddTags: BASEURL + "/wallpaper/1/tags",
	randList: BASEURL + "/wallpaper/rand"
}
