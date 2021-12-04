import React from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import myStyles from '../../constants/myStyles'

export const ErrorView = ({children, refreshing, onRefresh}) => {
  return (refreshing == null || !onRefresh) ? (
    <Text style={myStyles.errorText}>{children}</Text>
  ) : ( 
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      nestedScrollEnabled={true}
    >
      <Text style={myStyles.errorText}>{children}</Text>
    </ScrollView>
  )
}
