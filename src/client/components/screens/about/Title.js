import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    fontFamily: 'Turum2',
    color: '#d2a700',
    fontSize: '72px',
    lineHeight: '48px',
    textAlign: 'right',
    verticalAlign: 'top',
    fontWeight: 'bold',
    marginRight: '10px',
    paddingRight: '10px',
    borderRight: '1px solid #ffffff',
    marginTop: '5px',
  },
})

const Title = () => (
  <div className={styles()}>
    <div>
      ИЗМЕНИТЬ
    </div>
    <div>
      ФУТБОЛ
    </div>
    <div>
      НАМ ПО СИЛАМ
    </div>
  </div>
)

export default Title
