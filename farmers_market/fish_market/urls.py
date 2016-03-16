from django.conf.urls import url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views

urlpatterns = [
    url(r'^home', views.fish),
    url(r'^marine', views.marine),
    url(r'^fresh', views.fresh),
    url(r'^shell', views.shell),
    url(r'^fishDetails/$', views.fishDetails , name='details' ),
]

urlpatterns += staticfiles_urlpatterns()
