<template>
    <div>
        <v-banner></v-banner>
        <div class="home-section">
            <v-section :sectionItem="item" v-for="item in sectionList" :key="item.id"></v-section>
        </div>
        <v-cooperation></v-cooperation>
        <v-slogan></v-slogan>
    </div>
</template>

<script>
    import banner from './banner/banner.vue';
    import signUp from '../common/signUp.vue';
    import slogan from './slogan/slogan.vue';
    import section from './section/section.vue';
    import cooperation from '../../components/home/cooperation/cooperation.vue';
    import class101 from '../../assets/images/class1/class1-01.jpg';
    import class102 from '../../assets/images/class1/class1-02.jpg';
    import class103 from '../../assets/images/class1/class1-03.jpg';
    import class201 from '../../assets/images/class2/class2-01.jpg';
    import class202 from '../../assets/images/class2/class2-02.jpg';
    import class203 from '../../assets/images/class2/class2-03.jpg';
    import class301 from '../../assets/images/class3/class3-01.jpg';
    import class302 from '../../assets/images/class3/class3-02.jpg';
    import class303 from '../../assets/images/class3/class3-03.jpg';
    export default {
        data() {
            return {
                dialogFormVisible :false,
                sectionList:[
                    {
                        id:1,
                        title:'初级课程',
                        brief:'学员通过有针对性的培训，快速掌握区块链的基础知识',
                        data:[
                            {
                                id:1,
                                image:class101,
                                brief:'这是一段简介'
                            },
                            {
                                id:2,
                                image:class102,
                                brief:'这是一段简介'
                            },
                            {
                                id:3,
                                image:class103,
                                brief:'这是一段简介'
                            }
                        ]
                    },
                    {
                        id:2,
                        title:'中级课程',
                        brief:'学员通过专业的培训，深入掌握区块链的基本知识及发展趋势，学会区块链颠覆世界的逻辑及思维方式',
                        data:[
                            {
                                id:1,
                                image:class201,
                                brief:'这是一段简介'
                            },
                            {
                                id:2,
                                image:class202,
                                brief:'这是一段简介'
                            },
                            {
                                id:3,
                                image:class203,
                                brief:'这是一段简介'
                            }
                        ]
                    },
                    {
                        id:3,
                        title:'高级课程',
                        brief:'学员通过专业的培训，能深入了解区块链的商业应用场景，掌握判断区块链项目的方法和原理',
                        data:[
                            {
                                id:1,
                                image:class301,
                                brief:'这是一段简介'
                            },
                            {
                                id:2,
                                image:class302,
                                brief:'这是一段简介'
                            },
                            {
                                id:3,
                                image:class303,
                                brief:'这是一段简介'
                            }
                        ]
                    },
                    {
                        id:4,
                        title:'企业定制课程',
                        brief:"根据企业自身发展需要而度身定做，旨在根据企业学习了解或业务结合区块链的具体需求，定制专门的区块链培训课程。",
                        data:'如需请联系管理员'
                    }
                ]



            }
        },
        components:{
            'v-banner': banner,
            'v-signUp': signUp,
            'v-section':section,
            'v-slogan':slogan,
            'v-cooperation':cooperation
        }
    };
</script>

<style lang="scss">

</style>