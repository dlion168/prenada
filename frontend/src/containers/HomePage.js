import { ScrollView } from 'react-native';
import { ChecklistItem } from '../components/check_list/ChecklistItem.js'
import { BottomTabNavigator } from '../components/BottomTabNavigator.js'
const HomePage = ()=>{
    const checklist=[{"checked":false, "text":"Start taking prenatal Vitamin", "liked": false},
    {"checked":false, "text":"Start taking prenatal Vitamin", "liked": false},
    {"checked":false, "text":"Start taking prenatal Vitamin", "liked": false},
    {"checked":false, "text":"Start taking prenatal Vitamin", "liked": false}
    ]
    return( 
    <ScrollView>
        <View>
            <Text>Week 1 of Pregnency</Text>
        </View>
        {checklist.map((e)=>{<ChecklistItem checked={e.checked} text={e.text} liked={e.liked}></ChecklistItem>})}
        <View>
            <Text>Body Data</Text>
        </View>
        <View>
            <Text>Library</Text>
        </View>
        <BottomTabNavigator></BottomTabNavigator>
    </ScrollView>
    )
}
export default HomePage;