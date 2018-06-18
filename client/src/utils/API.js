import axios from "axios";

export default {
    // Gets all books
    getTrails: function () {
        //name = "?title=/^In/"
        return axios.get("/api/trails");
    },
    // Gets the book with the given id
    getTrail: function (id) {
        return axios.get("/api/trails/" + id);
    },
    // Update the trail with given id
    updateTrail: function (id, item) {
        return axios.put("/api/trails/" + id, item)
    },
    // Deletes the book with the given id
    deleteTrail: function (id) {
        return axios.delete("/api/trails/" + id);
    },
    // Saves a book to the database
    saveTrail: function (trailData) {
        return axios.post("/api/trails", trailData);
    }
};
