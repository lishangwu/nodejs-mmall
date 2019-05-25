import { Const } from '../common'
import { sequelize, Sequelize } from '../db/db'

const Op = Sequelize.Op
const model = require('../db/model')
const Order = model[Const.Entity.Order]

class OrderDao {


    async insert(order){
        return await OrderDao.create(order)
    }

    async selectByUserId(userId, pageNum,pageSize){
        const options = {
            attributes: {exclude : ['create_time', 'update_time']},
            page: Number(pageNum), // Default 1
            paginate: Number(pageSize), // Default 25
            order: [['id', 'ASC']],
            where: { user_id: userId }
        }
        return { total, docs, pages } = await Order.paginate(options)
    }

    async selectByUserIdAndOrderNo(userId, orderNo){
        return await OrderDao.findOne({
            where: {
                user_id: userId,
                order_id: orderNo
            }
        })
    }

    async updateByPrimaryKeySelective(updateOrder){
        let set = {}
        for (let attr in updateOrder) {
            if (product[attr]) {
                set[attr] = updateOrder[attr]
            }
        }
        return await Order.update(
            set,
            { where: { id: updateOrder.id } }
        )
    }

}

module.exports = {
    OrderDao
}