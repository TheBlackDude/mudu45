from django.conf.urls import include, url
from django.contrib import admin
from django.utils.translation import ugettext_lazy as _
from mudu import urls, views

urlpatterns = [
    url(r'^$', views.IndexPage.as_view(), name='index'),
    url(r'^api/', include(urls)),

    url(r'^gagou/', include(admin.site.urls)),
]

admin.site.site_title = _('MuDu45 Admin')
admin.site.site_header = _('MuDu45 Administration')
admin.site.index_title = _('MuDu45 Administration')
