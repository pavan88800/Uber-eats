import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130
  },

  loadingImage: {
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  restaurantNotFound: {
    alignSelf: 'center',
    marginTop: '50%',
    fontSize: 25
  },
  restaurant: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 20
  },
  restaurantImageView: {
    marginBottom: 10
  },
  restaurantImage: {
    width: '100%',
    height: 200
  },
  restaurantCard: {
    position: 'absolute',
    right: 20,
    top: 20,
    borderRadius: 20
  },
  restaurantInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  restaurantRatingView: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },

  restaurantInfoNameText: {
    fontSize: 15,
    fontWeight: 'bold'
  },

  restaurantInfoMin: {
    fontSize: 13,
    color: 'gray'
  }
})
