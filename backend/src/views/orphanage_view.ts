import Orphanage from '../models/Orphanage';
import imagesView from './images_View';
export default {
    render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            opening_on_weekends: orphanage.opening_on_weekends,
            images: imagesView.rendeMany(orphanage.images)
        };
    },

    rendeMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanages => this.render(orphanages))
    }
}