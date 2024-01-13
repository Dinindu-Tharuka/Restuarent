from django.urls import path, include
from rest_framework_nested.routers import DefaultRouter, NestedDefaultRouter
from .views import CategoryViewSet, ProductViewSet, OrderItemViewSet, AllOrderItemViewSet, AllProductViewSet
from .views import PageOrderViewSet, OrderViewSet, SubCategoryViewSet
from .views import FloorViewSet, TableViewSet, AllTableViewSet, MultipleMakeProducts

router = DefaultRouter()
router.register('product-categories', CategoryViewSet, basename='product-categories')
router.register('orders', OrderViewSet, basename='orders')
router.register('page-orders', PageOrderViewSet, basename='page-orders')
router.register('all-order-items', AllOrderItemViewSet, basename='all-orderitems')
router.register('all-products', AllProductViewSet, basename='all-products')

## Tables
router.register('floors', FloorViewSet, basename='floors')
router.register('all-tables', AllTableViewSet, basename='all-tables')

table_router = NestedDefaultRouter(router, 'floors', lookup='floor')
table_router.register('tables', TableViewSet, basename='tables')

sub_category = NestedDefaultRouter(router, 'product-categories', lookup='category')
sub_category.register('sub-category', SubCategoryViewSet, basename='sub-category')

# product_router = NestedDefaultRouter(sub_category, 'sub-category', lookup='category')
# product_router.register('products', ProductViewSet, basename='category-products')

orderitem_router = NestedDefaultRouter(router, 'orders', lookup='order')
orderitem_router.register('order-items', OrderItemViewSet, basename='order-items')

urlpatterns = [
    path('store/', include(router.urls)),
    path('store/', include(sub_category.urls)),
    # path('store/', include(product_router.urls)),
    path('store/', include(orderitem_router.urls)),
    path('store/', include(table_router.urls)),
    path('store/make-multi-products/', MultipleMakeProducts.as_view())
]
